// Enhanced ITIL 4 Learning Platform - Main Application
class ITIL4LearningPlatform {
    constructor() {
        this.currentAssessment = null;
        this.assessmentTimer = null;
        this.timeRemaining = 0;
        this.userAnswers = {};
        this.progress = this.loadProgress();
        this.init();
    }

    init() {
        this.migrateProgress();
        this.renderDays();
        this.updateProgressDisplay();
        this.startPeriodicRefresh();
    }

    migrateProgress() {
        // Ensure coolingOffPeriods exists for existing users
        if (!this.progress.coolingOffPeriods) {
            this.progress.coolingOffPeriods = {};
            this.saveProgress();
        }
    }

    startPeriodicRefresh() {
        // Refresh the UI every 30 seconds to update cooling-off timers
        setInterval(() => {
            // Check if any cooling-off periods have expired
            let hasExpiredCoolingOff = false;
            Object.keys(this.progress.coolingOffPeriods).forEach(dayNumber => {
                if (!this.isInCoolingOffPeriod(parseInt(dayNumber))) {
                    hasExpiredCoolingOff = true;
                }
            });
            
            // Re-render if any cooling-off periods have expired
            if (hasExpiredCoolingOff) {
                this.renderDays();
            }
        }, 30000); // Every 30 seconds
    }

    loadProgress() {
        const stored = localStorage.getItem('itil4Progress');
        return stored ? JSON.parse(stored) : {
            completedDays: 0,
            dayResults: {},
            totalHours: 0,
            coolingOffPeriods: {} // Track cooling-off periods per day
        };
    }

    saveProgress() {
        localStorage.setItem('itil4Progress', JSON.stringify(this.progress));
    }

    renderDays() {
        const container = document.getElementById('learningDays');
        container.innerHTML = '';

        itil4Curriculum.forEach((day, index) => {
            const isCompleted = this.progress.dayResults[day.day]?.passed || false;
            const isLocked = day.day > 1 && !this.progress.dayResults[day.day - 1]?.passed;
            const canTakeAssessment = day.day <= this.progress.completedDays + 1;

            const dayCard = this.createDayCard(day, isCompleted, isLocked, canTakeAssessment);
            container.appendChild(dayCard);
        });
    }

    createDayCard(day, isCompleted, isLocked, canTakeAssessment) {
        const card = document.createElement('div');
        const isInCoolingOff = this.isInCoolingOffPeriod(day.day);
        const coolingOffTime = this.getCoolingOffTimeRemaining(day.day);
        
        card.className = `bg-white rounded-lg shadow-lg overflow-hidden ${isLocked ? 'opacity-60' : ''}`;

        const statusIcon = isCompleted ? 
            '<i class="fas fa-check-circle text-green-500 text-2xl"></i>' :
            isInCoolingOff ? '<i class="fas fa-clock text-orange-500 text-2xl"></i>' :
            isLocked ? '<i class="fas fa-lock text-gray-400 text-2xl"></i>' :
            '<i class="fas fa-play-circle text-blue-500 text-2xl"></i>';

        const statusText = isCompleted ? 
            '<span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Completed</span>' :
            isInCoolingOff ? `<span class="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold">Study Break ${coolingOffTime}</span>` :
            isLocked ? '<span class="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-semibold">Locked</span>' :
            '<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">Available</span>';

        card.innerHTML = `
            <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center">
                        ${statusIcon}
                        <div class="ml-3">
                            <h3 class="text-xl font-bold text-gray-800">Day ${day.day}</h3>
                            <p class="text-sm text-gray-500">${day.duration}</p>
                        </div>
                    </div>
                    ${statusText}
                </div>
                
                <h4 class="text-lg font-semibold text-gray-700 mb-3">${day.title}</h4>
                
                <div class="mb-4">
                    <h5 class="font-semibold text-gray-600 mb-2">Learning Objectives:</h5>
                    <ul class="text-sm text-gray-600 space-y-1">
                        ${day.objectives.map(obj => `<li class="flex items-start"><i class="fas fa-check text-green-500 text-xs mt-1 mr-2"></i>${obj}</li>`).join('')}
                    </ul>
                </div>

                <div class="mb-4">
                    <h5 class="font-semibold text-gray-600 mb-2">Topics (${day.topics.length}):</h5>
                    <div class="space-y-2">
                        ${day.topics.map(topic => `
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-700">${topic.title}</span>
                                <span class="text-gray-500">${topic.duration}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="space-y-3">
                    <button 
                        onclick="app.showDetailedContent(${day.day})" 
                        class="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-200 ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}"
                        ${isLocked ? 'disabled' : ''}
                    >
                        <i class="fas fa-book-open mr-2"></i>Study Detailed Content
                    </button>
                    ${isInCoolingOff ? `
                        <div class="w-full bg-orange-100 border border-orange-200 px-4 py-3 rounded-lg">
                            <div class="text-center">
                                <i class="fas fa-clock text-orange-600 mr-2"></i>
                                <span class="text-orange-800 font-semibold">Study Break Active</span>
                                <div class="text-sm text-orange-700 mt-1">Use this time to review materials</div>
                                <div class="text-sm font-bold text-orange-800 mt-1">${coolingOffTime} remaining</div>
                            </div>
                        </div>
                    ` : `
                        <button 
                            onclick="app.startAssessment(${day.day})" 
                            class="w-full ${isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-3 rounded-lg transition duration-200 ${!canTakeAssessment ? 'opacity-50 cursor-not-allowed' : ''} font-semibold shadow-lg ${!isLocked && canTakeAssessment ? 'transform hover:scale-105' : ''}"
                            ${!canTakeAssessment ? 'disabled' : ''}
                        >
                            <i class="fas fa-clipboard-check mr-2"></i>
                            ${isCompleted ? 'Retake' : 'Take'} Day ${day.day} Assessment
                            ${!isCompleted ? ' (20 Questions • 20 Min)' : ''}
                        </button>
                    `}
                </div>

                ${this.progress.dayResults[day.day] ? `
                    <div class="mt-3 p-3 bg-gray-50 rounded-lg">
                        <div class="flex justify-between items-center text-sm">
                            <span>Last Score:</span>
                            <span class="font-semibold ${this.progress.dayResults[day.day].passed ? 'text-green-600' : 'text-red-600'}">
                                ${this.progress.dayResults[day.day].score}/20 (${Math.round(this.progress.dayResults[day.day].score/20*100)}%)
                            </span>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;

        return card;
    }

    showDetailedContent(dayNumber) {
        const day = itil4Curriculum.find(d => d.day === dayNumber);
        if (!day) return;

        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
        
        // Generate detailed content HTML
        let detailedContentHTML = '';
        day.topics.forEach(topic => {
            if (topic.detailedContent) {
                detailedContentHTML += `
                    <div class="mb-8 border border-gray-200 rounded-lg p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-xl font-bold text-gray-800">${topic.title}</h3>
                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">${topic.duration}</span>
                        </div>
                        
                        <div class="mb-4 p-4 bg-blue-50 rounded-lg">
                            <p class="text-gray-700 font-medium">${topic.detailedContent.introduction}</p>
                        </div>
                        
                        <div class="space-y-6">
                            ${topic.detailedContent.sections.map(section => `
                                <div class="bg-gray-50 rounded-lg p-4">
                                    <h4 class="text-lg font-semibold text-gray-800 mb-3">${section.title}</h4>
                                    <div class="prose prose-sm max-w-none">
                                        ${section.content}
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                    </div>
                `;
            } else {
                // Fallback for topics without detailed content
                detailedContentHTML += `
                    <div class="mb-6 border border-gray-200 rounded-lg p-4">
                        <div class="flex justify-between items-center mb-3">
                            <h4 class="text-lg font-semibold text-gray-800">${topic.title}</h4>
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-semibold">${topic.duration}</span>
                        </div>
                        <ul class="space-y-1">
                            ${topic.content.map(item => `<li class="flex items-start"><i class="fas fa-circle text-blue-400 text-xs mr-3 mt-2"></i><span class="text-gray-600">${item}</span></li>`).join('')}
                        </ul>
                    </div>
                `;
            }
        });

        modal.innerHTML = `
            <div class="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-screen overflow-y-auto">
                <div class="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
                    <div class="flex justify-between items-center">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-800">Day ${day.day}: ${day.title}</h2>
                            <p class="text-gray-600 mt-1">Detailed Learning Materials - ${day.duration}</p>
                        </div>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                </div>
                
                <div class="p-6">
                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-gray-700 mb-3">Learning Objectives</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            ${day.objectives.map(obj => `
                                <div class="flex items-start p-3 bg-green-50 rounded-lg">
                                    <i class="fas fa-target text-green-500 mr-3 mt-1"></i>
                                    <span class="text-gray-700">${obj}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="space-y-6">
                        ${detailedContentHTML}
                    </div>

                    <!-- Enhanced Assessment Call-to-Action Section -->
                    <div class="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
                        <div class="text-center mb-4">
                            <h3 class="text-xl font-bold text-gray-800 mb-2">
                                <i class="fas fa-graduation-cap text-blue-600 mr-2"></i>
                                Ready to Test Your Knowledge?
                            </h3>
                            <p class="text-gray-600 mb-4">
                                Complete your Day ${day.day} assessment to demonstrate your understanding and unlock the next day.
                            </p>
                            <div class="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
                                <div class="flex items-center justify-center text-yellow-800">
                                    <i class="fas fa-info-circle mr-2"></i>
                                    <span class="font-semibold">Assessment Details: 20 Questions • 20 Minutes • 70% to Pass</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex justify-center">
                            <button onclick="app.startAssessment(${day.day}); this.closest('.fixed').remove();" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center font-semibold text-lg shadow-lg transform hover:scale-105">
                                <i class="fas fa-clipboard-check mr-2"></i>Take Day ${day.day} Assessment
                            </button>
                        </div>
                        
                        <div class="mt-4 text-center">
                            <p class="text-sm text-gray-500">
                                💡 Tip: Pass the assessment to automatically unlock the next day. Failed attempts require a 2-hour study break.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }



    startAssessment(dayNumber) {
        const assessment = itil4Assessments[`day${dayNumber}`];
        if (!assessment) {
            alert('Assessment not available for this day yet.');
            return;
        }

        // Check if this day is in cooling-off period
        if (this.isInCoolingOffPeriod(dayNumber)) {
            const timeRemaining = this.getCoolingOffTimeRemaining(dayNumber);
            alert(`You must wait ${timeRemaining} before retaking this assessment. Use this time to review the learning materials.`);
            return;
        }

        // Check if previous day is completed (except for day 1)
        if (dayNumber > 1 && !this.progress.dayResults[dayNumber - 1]?.passed) {
            alert('You must pass the previous day\'s assessment before taking this one.');
            return;
        }

        this.currentAssessment = assessment;
        this.userAnswers = {};
        this.timeRemaining = assessment.timeLimit * 60; // Convert to seconds
        
        document.getElementById('assessmentTitle').textContent = assessment.title;
        this.renderAssessmentQuestions();
        this.startTimer();
        document.getElementById('assessmentModal').classList.remove('hidden');
    }

    renderAssessmentQuestions() {
        const container = document.getElementById('assessmentContent');
        container.innerHTML = this.currentAssessment.questions.map((q, index) => `
            <div class="mb-6 p-4 border border-gray-200 rounded-lg">
                <h4 class="font-semibold text-gray-800 mb-3">${index + 1}. ${q.question}</h4>
                <div class="space-y-2">
                    ${q.options.map((option, optIndex) => `
                        <label class="flex items-start cursor-pointer hover:bg-gray-50 p-2 rounded">
                            <input type="radio" name="question_${q.id}" value="${optIndex}" 
                                   onchange="app.saveAnswer(${q.id}, ${optIndex})"
                                   class="mt-1 mr-3">
                            <span class="text-gray-700">${option}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    saveAnswer(questionId, answerIndex) {
        this.userAnswers[questionId] = answerIndex;
        
        // Update progress indicator
        const answeredCount = Object.keys(this.userAnswers).length;
        const totalQuestions = this.currentAssessment.questions.length;
        const progressText = `Progress: ${answeredCount}/${totalQuestions} questions answered`;
        
        // Add or update progress indicator
        let progressDiv = document.getElementById('assessmentProgress');
        if (!progressDiv) {
            progressDiv = document.createElement('div');
            progressDiv.id = 'assessmentProgress';
            progressDiv.className = 'text-sm text-gray-600 mb-4';
            document.getElementById('assessmentContent').insertBefore(progressDiv, document.getElementById('assessmentContent').firstChild);
        }
        progressDiv.textContent = progressText;
    }

    startTimer() {
        this.updateTimerDisplay();
        this.assessmentTimer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.submitAssessment();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timeRemaining').textContent = display;
        
        // Change color when time is running low
        const timerElement = document.getElementById('timeRemaining');
        if (this.timeRemaining <= 300) { // 5 minutes
            timerElement.className = 'font-semibold text-red-600';
        } else if (this.timeRemaining <= 600) { // 10 minutes
            timerElement.className = 'font-semibold text-yellow-600';
        } else {
            timerElement.className = 'font-semibold text-gray-600';
        }
    }

    submitAssessment() {
        if (this.assessmentTimer) {
            clearInterval(this.assessmentTimer);
        }

        // Check if all questions are answered
        const totalQuestions = this.currentAssessment.questions.length;
        const answeredQuestions = Object.keys(this.userAnswers).length;
        
        if (answeredQuestions < totalQuestions) {
            if (!confirm(`You have only answered ${answeredQuestions} out of ${totalQuestions} questions. Submit anyway?`)) {
                this.startTimer(); // Restart timer if they choose to continue
                return;
            }
        }

        // Calculate score
        let correctAnswers = 0;
        this.currentAssessment.questions.forEach(q => {
            if (this.userAnswers[q.id] === q.correct) {
                correctAnswers++;
            }
        });

        const passed = correctAnswers >= this.currentAssessment.passingScore;
        const dayNumber = parseInt(this.currentAssessment.title.match(/Day (\d+)/)[1]);

        // Save result
        this.progress.dayResults[dayNumber] = {
            score: correctAnswers,
            total: totalQuestions,
            passed: passed,
            timestamp: new Date().toISOString()
        };

        if (passed) {
            // Automatically unlock next day and mark this day as completed
            this.progress.completedDays = Math.max(this.progress.completedDays, dayNumber);
            this.progress.totalHours += 2; // Add 2 hours for completing the day
            
            // Remove any existing cooling-off period for this day
            if (this.progress.coolingOffPeriods[dayNumber]) {
                delete this.progress.coolingOffPeriods[dayNumber];
            }
        } else {
            // Set 2-hour cooling-off period
            const coolingOffEnd = new Date();
            coolingOffEnd.setHours(coolingOffEnd.getHours() + 2);
            
            this.progress.coolingOffPeriods[dayNumber] = {
                endTime: coolingOffEnd.toISOString(),
                startTime: new Date().toISOString()
            };
        }

        this.saveProgress();
        this.showResults(correctAnswers, totalQuestions, passed, dayNumber);
        document.getElementById('assessmentModal').classList.add('hidden');
    }

    showResults(score, total, passed, dayNumber) {
        const percentage = Math.round((score / total) * 100);
        
        document.getElementById('resultsIcon').innerHTML = passed ? 
            '<i class="fas fa-trophy text-yellow-500"></i>' : 
            '<i class="fas fa-clock text-orange-500"></i>';
        
        document.getElementById('resultsTitle').textContent = passed ? 'Congratulations!' : 'Study Break Required';
        
        if (passed) {
            document.getElementById('resultsMessage').textContent = 
                'You have successfully passed this assessment! The next day is now unlocked and ready for you to study.';
        } else {
            document.getElementById('resultsMessage').innerHTML = `
                <div class="mb-4">You scored ${percentage}%. You need 70% to pass.</div>
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div class="flex items-center mb-2">
                        <i class="fas fa-info-circle text-blue-600 mr-2"></i>
                        <strong class="text-blue-800">2-Hour Study Period Required</strong>
                    </div>
                    <p class="text-blue-700 text-sm">Use this time to review the learning materials before retaking the assessment.</p>
                    <div id="coolingOffTimer" class="mt-3 text-center">
                        <div class="text-2xl font-bold text-blue-600" id="timerDisplay">2:00:00</div>
                        <div class="text-sm text-blue-600">Time remaining</div>
                    </div>
                </div>
            `;
            this.startCoolingOffTimer(dayNumber);
        }
        
        document.getElementById('resultsScore').innerHTML = `
            <span class="${passed ? 'text-green-600' : 'text-orange-600'}">${score}/${total}</span>
            <div class="text-lg">(${percentage}%)</div>
        `;
        
        document.getElementById('resultsModal').classList.remove('hidden');
    }

    startCoolingOffTimer(dayNumber) {
        const coolingOffData = this.progress.coolingOffPeriods[dayNumber];
        if (!coolingOffData) return;

        const updateTimer = () => {
            const now = new Date();
            const endTime = new Date(coolingOffData.endTime);
            const timeLeft = endTime - now;

            if (timeLeft <= 0) {
                // Cooling-off period ended
                delete this.progress.coolingOffPeriods[dayNumber];
                this.saveProgress();
                this.renderDays();
                document.getElementById('timerDisplay').textContent = 'Study period complete!';
                return;
            }

            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const timerDisplay = document.getElementById('timerDisplay');
            if (timerDisplay) {
                timerDisplay.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                setTimeout(updateTimer, 1000);
            }
        };

        updateTimer();
    }

    isInCoolingOffPeriod(dayNumber) {
        const coolingOffData = this.progress.coolingOffPeriods[dayNumber];
        if (!coolingOffData) return false;

        const now = new Date();
        const endTime = new Date(coolingOffData.endTime);
        
        if (now >= endTime) {
            // Cooling-off period has ended, clean it up
            delete this.progress.coolingOffPeriods[dayNumber];
            this.saveProgress();
            return false;
        }
        
        return true;
    }

    getCoolingOffTimeRemaining(dayNumber) {
        const coolingOffData = this.progress.coolingOffPeriods[dayNumber];
        if (!coolingOffData) return null;

        const now = new Date();
        const endTime = new Date(coolingOffData.endTime);
        const timeLeft = endTime - now;

        if (timeLeft <= 0) return null;

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        return `${hours}h ${minutes}m`;
    }

    updateProgressDisplay() {
        document.getElementById('completedDays').textContent = 
            Object.values(this.progress.dayResults).filter(r => r.passed).length;
        document.getElementById('totalHours').textContent = this.progress.totalHours;
        document.getElementById('assessmentsPassed').textContent = 
            Object.values(this.progress.dayResults).filter(r => r.passed).length;
    }
}

// Global functions for HTML onclick events
function closeAssessment() {
    if (app.assessmentTimer) {
        clearInterval(app.assessmentTimer);
    }
    document.getElementById('assessmentModal').classList.add('hidden');
}

function submitAssessment() {
    app.submitAssessment();
}

function closeResults() {
    document.getElementById('resultsModal').classList.add('hidden');
    app.renderDays();
    app.updateProgressDisplay();
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new ITIL4LearningPlatform();
}); 