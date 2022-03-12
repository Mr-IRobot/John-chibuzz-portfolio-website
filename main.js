//<script defer>
                    //custom cursor
                    const cursor = document.querySelector('.cursor');

                        const navLinks = document.querySelectorAll('.nav_link, .project_item');
                        navLinks.forEach(l=>{
                        l.addEventListener("mouseenter", e => {
                            cursor.classList.add("grow");
                            console.log(cursor);
                        });
                        l.addEventListener("mouseleave", e => {
                            cursor.classList.remove("grow");
                        })
                        })

                        const ctaLinks = document.querySelectorAll('.cta, .email_link');
                        ctaLinks.forEach(l=>{
                        l.addEventListener("mouseenter", e => {
                            cursor.classList.add("cta-grow");
                        });
                        l.addEventListener("mouseleave", e => {
                            cursor.classList.remove("cta-grow");
                        })
                        });
                        
                        const blurLinks = document.querySelectorAll('.project_item');
                        blurLinks.forEach(l=>{
                        l.addEventListener("mouseenter", e => {
                            cursor.classList.add("blur-grow");
                        });
                        l.addEventListener("mouseleave", e => {
                            cursor.classList.remove("blur-grow");
                        })
                        });

                    //service list anim
                    const items = document.querySelectorAll(".service_list p, .service_list");

                    items.forEach(item => {
                        new IntersectionObserver((entries, observer) => { 
                        entries.forEach(entry => {
                            if(entry.isIntersecting){
                            entry.target.classList.add('reveal');
                            }
                        });
                        },
                                                { 
                        rootMargin: "-15% 0% -15% 0%",
                        threshold: 0
                        }).observe(item);
                    })
                //</script>