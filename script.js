const skills = [
            { name: 'Web Development', level: 'Advanced' },
            { name: 'UI/UX Design', level: 'Intermediate' },
            { name: 'JavaScript', level: 'Proficient' },
            { name: 'React', level: 'Proficient' },
            { name: 'Node.js', level: 'Intermediate' },
            { name: 'Python', level: 'Beginner' }
        ];

        // Function to create skill cards
        function createSkillCards() {
            const skillsGrid = document.querySelector('.skills-grid');
            
            skills.forEach(skill => {
                const card = document.createElement('div');
                card.className = 'skill-card';
                
                const progressLevel = Math.random() * 100; // Random for demonstration
                const progressWidth = document.createElement('div');
                progressWidth.className = 'progress-fill';
                progressWidth.style.width = `${progressLevel}%`;
                
                const progressBar = document.createElement('div');
                progressBar.className = 'progress-bar';
                progressBar.appendChild(progressWidth);
                
                card.innerHTML = `
                    <h3 class="skill-name">${skill.name}</h3>
                    <p class="skill-level">${skill.level}</p>
                `;
                
                card.appendChild(progressBar);
                skillsGrid.appendChild(card);
            });
        }

        // Initialize skill cards when the section comes into view
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    createSkillCards();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(document.querySelector('.skills-section'));

       