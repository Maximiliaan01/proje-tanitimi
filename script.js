const projects = {
    oyun: [
        {
            title: "Oyun 1",
            description: "Uzayda geçen, farklı gezegenlerde görevler yapılan bir macera oyunu.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Oyun 2",
            description: "Orman hayvanlarının yaşamını simüle eden bir strateji oyunu.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Oyun 3",
            description: "Futbol takımınızı yönettiğiniz bir spor simülasyonu.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Oyun 4",
            description: "Puzzle ve bulmaca çözme oyunu.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Oyun 5",
            description: "Zombi kıyametinde hayatta kalma oyunu.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Oyun 6",
            description: "Yarış oyunu.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Oyun 7",
            description: "RPG macera oyunu.",
            image: "https://via.placeholder.com/400x300"
        }
    ],
    yazilim: [
        {
            title: "Yazılım 1",
            description: "Akıllı ev sistemi için yazılım projesi.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Yazılım 2",
            description: "E-Ticaret platformu.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Yazılım 3",
            description: "Blog sitesi.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Yazılım 4",
            description: "Sosyal medya uygulaması.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Yazılım 5",
            description: "Eğitim platformu.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Yazılım 6",
            description: "Haber sitesi.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Yazılım 7",
            description: "Forum sitesi.",
            image: "https://via.placeholder.com/400x300"
        }
    ],
    uygulama: [
        {
            title: "Uygulama 1",
            description: "Fitness takip uygulaması.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Uygulama 2",
            description: "Dil öğrenme uygulaması.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Uygulama 3",
            description: "Yemek tarifi uygulaması.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Uygulama 4",
            description: "Hava durumu uygulaması.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Uygulama 5",
            description: "Not alma uygulaması.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Uygulama 6",
            description: "Alışveriş listesi uygulaması.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Uygulama 7",
            description: "Takvim uygulaması.",
            image: "https://via.placeholder.com/400x300"
        }
    ],
    tanitim: [
        {
            title: "Hakkımda",
            description: "Kişisel bilgiler ve deneyimler.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Eğitim",
            description: "Eğitim geçmişi ve sertifikalar.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Yetenekler",
            description: "Teknik ve kişisel yetenekler.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Projeler",
            description: "Tamamlanan projeler ve başarılar.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "İletişim",
            description: "İletişim bilgileri ve sosyal medya.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Blog",
            description: "Yazılar ve makaleler.",
            image: "https://via.placeholder.com/400x300"
        },
        {
            title: "Galeri",
            description: "Fotoğraf ve video galerisi.",
            image: "https://via.placeholder.com/400x300"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const categoryBoxes = document.querySelectorAll('.category-box');
    const mainCategories = document.querySelector('.main-categories');
    const modal = document.getElementById('projectModal');
    const closeButton = document.querySelector('.close-button');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    // Ana kategorilere tıklama olayı
    categoryBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const category = box.getAttribute('data-category');
            showCategoryContent(category);
        });
    });

    // Kategori içeriğini göster
    function showCategoryContent(category) {
        // Ana kategorileri gizle
        mainCategories.style.display = 'none';
        
        // Yeni içerik container'ı oluştur
        const contentContainer = document.createElement('div');
        contentContainer.className = 'category-content';
        
        // Geri dön butonu ekle
        const backButton = document.createElement('button');
        backButton.className = 'back-button';
        backButton.innerHTML = '← Geri Dön';
        backButton.addEventListener('click', () => {
            contentContainer.remove();
            mainCategories.style.display = 'grid';
        });
        contentContainer.appendChild(backButton);
        
        // Kategori başlığı
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = box.querySelector('h2').textContent;
        contentContainer.appendChild(categoryTitle);
        
        // Proje kutularını oluştur
        const projectsGrid = document.createElement('div');
        projectsGrid.className = 'projects-grid';
        
        // Sadece ilk 7 projeyi göster
        projects[category].slice(0, 7).forEach(project => {
            const projectBox = document.createElement('div');
            projectBox.className = 'project-box';
            projectBox.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <h3>${project.title}</h3>
            `;
            
            projectBox.addEventListener('click', () => {
                showProjectDetails(project);
            });
            
            projectsGrid.appendChild(projectBox);
        });
        
        contentContainer.appendChild(projectsGrid);
        document.querySelector('.container').appendChild(contentContainer);
    }

    // Proje detaylarını göster
    function showProjectDetails(project) {
        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modal.style.display = 'block';
    }

    // Modalı kapat
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Modal dışına tıklandığında kapat
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}); 