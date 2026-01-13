export type Photographer = {
    id: string;
    slug: string;
    name: string;
    genre: string;
    location: string;
    price: number;
    rating: number;
    bio: string;
    imageUrl: string;
    portfolio: string[];
};

export const photographers: Photographer[] = [
    {
        id: "1",
        slug: "aarav-patel",
        name: "Ananya G K",
        genre: "Wedding",
        location: "Mumbai, Maharashtra",
        price: 85000,
        rating: 4.9,
        bio: "Specializing in grand traditional weddings. I capture the vibrant colors and raw emotions of Indian ceremonies.",
        imageUrl: "https://images.unsplash.com/photo-1643946618030-70719b427667?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJ1c2luZXNzJTIwd29tZW4lMjBpbmRpaWFuJTIwcGhvdG9ncmFwaGVyfGVufDB8fDB8fHww",
        portfolio: [
            "https://images.unsplash.com/photo-1654156577076-e0350ba86cc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGNvdXBsZSUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1647949940712-bfcf82015d9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFtaWwlMjBuYWR1JTIwd2VkZGluZyUyMHBpY3N8ZW58MHx8MHx8fDA%3D",
            "https://tse4.mm.bing.net/th/id/OIP.IrOLY-J_q8r234zyqwAyXQHaE8?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=",
            "https://images.unsplash.com/photo-1587271636175-90d58cdad458?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1641279762487-33beaaf68775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMGNvdXBsZSUyMHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
        ],
    },
    {
        id: "2",
        slug: "priya-sharma",
        name: "Ashish G K",
        genre: "Portrait",
        location: "Bangalore, Karnataka",
        price: 15000,
        rating: 4.8,
        bio: "Natural light portrait photographer bringing out the best in bridal portraits and family gatherings.",
        imageUrl: "https://images.unsplash.com/photo-1645776856563-f5f29aefc186?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwcHJvZmVzc2lvbmFscyUyMHBob3RvZ3JhcGhlcnN8ZW58MHx8MHx8fDA%3D",
        portfolio: [
            "https://images.unsplash.com/photo-1683581764776-781773694ad7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwcGhvdG9ncmFwaGVycyUyMGNhcHR1cmVkJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1632292611299-980426b386a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHBob3RvZ3JhcGhlcnMlMjBjYXB0dXJlZCUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1697347815359-ee09122395a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHBob3RvZ3JhcGhlcnMlMjBjYXB0dXJlZCUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
        ],
    },
    {
        id: "3",
        slug: "rahul-verma",
        name: "Sathwik S",
        genre: "Fashion",
        location: "Bangalore, Karnataka",
        price: 25000,
        rating: 5.0,
        bio: "Contemporary fashion and editorial photographer. Mixing traditional wear with modern aesthetics.",
        imageUrl: "https://images.unsplash.com/photo-1599881552139-89cf4b8bad42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMHByb2Zlc3Npb25hbHMlMjBwaG90b2dyYXBoZXJzfGVufDB8fDB8fHww",
        portfolio: [
            "https://images.unsplash.com/photo-1647963938435-94777b3c024f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMHBob3RvZ3JhcGhlcnMlMjBjYXB0dXJlZCUyMHBpY3R1cmVzfGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1724762182199-2f7a294f812d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwcGhvdG9ncmFwaGVycyUyMGNhcHR1cmVkJTIwcGljdHVyZXMlMjB3ZWRkaW5nJTIwYW5kJTIwZXZlbnRzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1665960212519-adcbb5e2ca03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwcGhvdG9ncmFwaGVycyUyMGNhcHR1cmVkJTIwcGljdHVyZXMlMjB3ZWRkaW5nJTIwYW5kJTIwZXZlbnRzfGVufDB8fDB8fHww"
        ]
    },
    {
        id: "4",
        slug: "arjun-singh",
        name: "Shreyas Adiga",
        genre: "Pre-wedding",
        location: "Jaipur, Rajasthan",
        price: 45000,
        rating: 4.7,
        bio: "Capturing your love story in the royal palaces of Rajasthan. Cinematic pre-wedding shoots.",
        imageUrl: "https://media.istockphoto.com/id/1347073805/photo/a-young-indian-boy-capturing-the-moment-in-wedding-from-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=064RS4slIHs_dyUeW5SojudHMGoO8E-J83u2Q3S-XmQ=",
        portfolio: [
            "https://images.unsplash.com/photo-1756454487561-0921dd260710?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwcGhvdG9ncmFwaGVycyUyMGNhcHR1cmVkJTIwcGljdHVyZXMlMjB3ZWRkaW5nJTIwYW5kJTIwZXZlbnRzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1762709414755-864441676f5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHBob3RvZ3JhcGhlcnMlMjBjYXB0dXJlZCUyMHBpY3R1cmVzJTIwd2VkZGluZyUyMGFuZCUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D",
            ""
        ]
    },
    {
        id: "5",
        slug: "ananya-reddy",
        name: "Sneha",
        genre: "Events",
        location: "Hyderabad, Telangana",
        price: 30000,
        rating: 4.9,
        bio: "Expert in capturing Sangeet, Mehendi, and Haldi ceremonies with vibrant energy.",
        imageUrl: "https://media.istockphoto.com/id/2233216322/photo/wildlife-photographer-taking-pictures-during-an-indian-safari.webp?a=1&b=1&s=612x612&w=0&k=20&c=5kqUr5YjWd6sk3I8AkH-m3XmOHi2rTVwLOMCYaiuGek=",
        portfolio: [
            "https://plus.unsplash.com/premium_photo-1720798652070-8cfd8ed6060b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwcGhvdG9ncmFwaGVycyUyMGNhcHR1cmVkJTIwcGljdHVyZXMlMjB3ZWRkaW5nJTIwYW5kJTIwZXZlbnRzJTIwYW5kJTIwbW9kZWxpbmd8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1667522589430-10839f374743?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMHBob3RvZ3JhcGhlcnMlMjBjYXB0dXJlZCUyMHBpY3R1cmVzJTIwd2VkZGluZyUyMGFuZCUyMGV2ZW50cyUyMGFuZCUyMG1vZGVsaW5nfGVufDB8fDB8fHww"
        ]
    }
];
