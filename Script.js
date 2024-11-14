const galleryData = [
    { 
        src: 'Image 1.jpg', 
        title: 'Image 1', 
        description: 'Illumi Lights is a brand that specializes in innovative, smart lighting products, designed to enhance the ambiance' 
    },
    { 
        src: 'Image 2.jpg', 
        title: 'Image 2', 
        description: 'Illumi Lights often integrate smart technology, allowing users to control lighting remotely via smartphone apps, voice assistants ' 
    },
    { 
        src: 'Image 3.jpg', 
        title: 'Image 3', 
        description: 'One of the primary features of Illumi Lights is the ability to change colors.' 
    },
    {
        src: 'Image 4 copy.jpg',
        title:'Image 4',
        description: 'The lights typically use LED technology, known for its energy efficiency.'
    },
    { 
        src: 'image 5.jpg',
        title:'Image 5',
        description:'Illumi Lights offers a variety of lighting solutions, including smart bulbs, LED strips, flood lights.'
    },
    {
        src: 'Image 6.jpg',
        title:'Image 6',
        description:'Many Illumi Lights products are compatible with voice assistants, allowing users to control the lights '
    },
    { 
        src: 'Image 7.jpg',
        title:'Image 7',
        description:'Some Illumi Lights products feature music sync modes that allow the lights to change colors .'
    },
    { 
        src: 'Image 8.jpg',
        title: 'Image 8',
        description:'The accompanying mobile app allows users to set timers, adjust brightness levels.'
    },
    { 
        src:'Image 9.jpg',
        title:'Image 9',
        description: 'Illumi Lights can often be integrated with other smart home devices, including security systems and home automation platforms.'
    },
    { 
        src:'Image 10.jpg',
        title: 'Image 10',
        description: 'Many Illumi Lights products, such as LED strips, are designed for easy installation.'
    },
    { 
        src:'Image 11.jpg',
        title:'Image 11',
        description:'With adjustable brightness and customizable color options, Illumi Lights are ideal for creating the perfect atmosphere .'
    },
    { 
        src:'Image 12.jpg',
        title:'Image 12',
        description:'The lights are typically designed to last for many years, offering high durability and resistance to heat, moisture, and external wear.'
    }
];

const galleryContainer = document.getElementById('gallery');

galleryData.forEach((image) => {
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title;

    const info = document.createElement('div');
    info.classList.add('image-info');
    info.innerHTML = <h2>${image.title}</h2>;
    <p>${image.description}</p>; 

    imageItem.appendChild(img);
    imageItem.appendChild(info);
    galleryContainer.appendChild(imageItem);
});