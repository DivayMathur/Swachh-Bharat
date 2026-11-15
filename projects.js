// projects.js - Project filtering and modal functionality

class ProjectsManager {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-button');
        this.projectCards = document.querySelectorAll('.project-card');
        this.modal = document.getElementById('project-modal');
        this.closeModalBtn = document.getElementById('close-modal');
        this.viewDetailsBtns = document.querySelectorAll('.view-details');
        
        this.projectData = {
            '1': {
                title: 'Street-to-School Initiative',
                badges: ['School', 'Street'],
                description: 'A comprehensive program connecting cleanup drives with educational workshops across 45 schools.',
                details: `
                    <div class="space-y-6">
                        <div>
                            <h3 class="font-display text-xl font-bold text-indigo mb-3">About This Project</h3>
                            <p class="text-warmgray leading-relaxed mb-4">
                                The Street-to-School Initiative bridges practical environmental action with classroom education. 
                                Students participate in local cleanup drives and then attend workshops where they learn about 
                                waste management, recycling, and environmental responsibility.
                            </p>
                            <p class="text-warmgray leading-relaxed">
                                This dual approach ensures lasting behavioral change and empowers students to become 
                                environmental leaders in their communities.
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="font-display text-xl font-bold text-indigo mb-3">Key Achievements</h3>
                            <ul class="space-y-2 text-warmgray">
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>45 schools actively participating across 8 cities</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>2,100 kg of waste collected and properly disposed</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>850+ student volunteers trained as cleanup coordinators</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>62 educational workshops conducted on waste segregation</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 class="font-display text-xl font-bold text-indigo mb-3">Impact Stats</h3>
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div class="text-center p-4 bg-offwhite rounded-lg">
                                    <div class="font-display text-3xl font-bold text-saffron mb-1">45</div>
                                    <div class="text-sm text-warmgray">Schools</div>
                                </div>
                                <div class="text-center p-4 bg-offwhite rounded-lg">
                                    <div class="font-display text-3xl font-bold text-evergreen mb-1">850+</div>
                                    <div class="text-sm text-warmgray">Volunteers</div>
                                </div>
                                <div class="text-center p-4 bg-offwhite rounded-lg">
                                    <div class="font-display text-3xl font-bold text-indigo mb-1">2.1T</div>
                                    <div class="text-sm text-warmgray">Waste Collected</div>
                                </div>
                                <div class="text-center p-4 bg-offwhite rounded-lg">
                                    <div class="font-display text-3xl font-bold text-saffron mb-1">62</div>
                                    <div class="text-sm text-warmgray">Workshops</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                volunteers: 850
            },
            '2': {
                title: 'River Revival Project',
                badges: ['Water Bodies'],
                description: 'Monthly riverbank cleanup campaigns with water quality monitoring and ecosystem restoration.',
                details: `
                    <div class="space-y-6">
                        <div>
                            <h3 class="font-display text-xl font-bold text-indigo mb-3">About This Project</h3>
                            <p class="text-warmgray leading-relaxed mb-4">
                                Our River Revival Project focuses on restoring the health of local water bodies through 
                                systematic cleanup drives and continuous water quality monitoring.
                            </p>
                            <p class="text-warmgray leading-relaxed">
                                We work closely with environmental scientists to track improvements and ensure our 
                                efforts lead to measurable positive impact on aquatic ecosystems.
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="font-display text-xl font-bold text-indigo mb-3">What We've Accomplished</h3>
                            <ul class="space-y-2 text-warmgray">
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>Removed over 3 tons of plastic waste from riverbanks</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>12 monthly cleanup drives completed successfully</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>Water quality improved by 35% in monitored areas</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>320+ dedicated volunteers trained in river conservation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                `,
                volunteers: 320
            },
            '3': {
                title: 'Plastic-Free Campus',
                badges: ['School', 'Recycling'],
                description: 'Comprehensive program to eliminate single-use plastics from educational institutions.',
                details: `
                    <div class="space-y-6">
                        <div>
                            <h3 class="font-display text-xl font-bold text-indigo mb-3">Project Overview</h3>
                            <p class="text-warmgray leading-relaxed">
                                The Plastic-Free Campus initiative aims to completely eliminate single-use plastics from 
                                schools and colleges by providing sustainable alternatives and changing consumption habits.
                            </p>
                        </div>
                        
                        <div>
                            <h3 class="font-display text-xl font-bold text-indigo mb-3">Our Approach</h3>
                            <ul class="space-y-2 text-warmgray">
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>Installing water refill stations in 45+ institutions</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>Distributing 5,000+ reusable water bottles to students</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>Replacing plastic cutlery with eco-friendly alternatives</span>
                                </li>
                                <li class="flex items-start gap-2">
                                    <svg class="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    <span>Educating 12,000+ students about plastic pollution</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                `,
                volunteers: 1200
            },
            '4': {
                title: 'Community Composting',
                badges: ['Recycling'],
                description: 'Building neighborhood composting centers to manage organic waste sustainably.',
                details: `
                    <div class="space-y-6">
                        <div>
                            <h3 class="font-display text-xl font-bold text-indigo mb-3">Why Composting Matters</h3>
                            <p class="text-warmgray leading-relaxed">
                                Organic waste makes up nearly 50% of household waste. Our Community Composting initiative 
                                teaches neighborhoods how to convert this waste into valuable compost for gardens and plants.
                            </p>
                        </div>
                    </div>
                `,
                volunteers: 180
            },
            '5': {
                title: 'Weekend Warriors',
                badges: ['Street'],
                description: 'Regular Saturday morning cleanup drives in public spaces across neighborhoods.',
                details: `
                    <div class="space-y-6">
                        <div>
                            <h3 class="font-display text-xl font-bold text-indigo mb-3">Join Our Weekend Drives</h3>
                            <p class="text-warmgray leading-relaxed">
                                Every Saturday at 7 AM, our Weekend Warriors gather to clean parks, markets, and public 
                                spaces. It's a great way to start your weekend while making a real difference!
                            </p>
                        </div>
                    </div>
                `,
                volunteers: 640
            },
            '6': {
                title: 'Clean India Ambassadors',
                badges: ['Awareness'],
                description: 'Training student leaders to spread environmental awareness in their communities.',
                details: `
                    <div class="space-y-6">
                        <div>
                            <h3 class="font-display text-xl font-bold text-indigo mb-3">Become an Ambassador</h3>
                            <p class="text-warmgray leading-relaxed">
                                Our ambassador program trains passionate students to become environmental leaders. 
                                Learn public speaking, community organizing, and advocacy skills.
                            </p>
                        </div>
                    </div>
                `,
                volunteers: 420
            }
        };
        
        this.init();
    }

    init() {
        this.setupFilters();
        this.setupModal();
    }

    setupFilters() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active state
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects
                const filter = button.getAttribute('data-filter');
                this.filterProjects(filter);
            });
        });
    }

    filterProjects(filter) {
        this.projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                const categories = card.getAttribute('data-category');
                if (categories.includes(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            }
        });
    }

    setupModal() {
        // Open modal on details click
        this.viewDetailsBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.project-card');
                const projectId = card.getAttribute('data-project');
                this.openModal(projectId);
            });
        });

        // Close modal
        if (this.closeModalBtn) {
            this.closeModalBtn.addEventListener('click', () => this.closeModal());
        }

        // Close on backdrop click
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && !this.modal.classList.contains('hidden')) {
                this.closeModal();
            }
        });
    }

    openModal(projectId) {
        const project = this.projectData[projectId];
        if (!project) return;

        // Update modal content
        document.getElementById('modal-title').textContent = project.title;
        
        const badgesContainer = document.getElementById('modal-badges');
        badgesContainer.innerHTML = project.badges.map(badge => 
            `<span class="badge badge-primary">${badge}</span>`
        ).join('');
        
        document.getElementById('modal-content').innerHTML = project.details;
        
        // Show modal
        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ProjectsManager());
} else {
    new ProjectsManager();
}

export default ProjectsManager;
