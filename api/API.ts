const products = {
  products: [
    {
      id: 1,
      title: "Microphone",
      image:
        "data:image/jpeg;base64,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",
      description: `No Batteries required Karaoke Accessory Uni-directional Dynamic Microphone. Product Dimension- 2.0 W x 2.0 L x 8.9 H Inches Wide Frequency Response & High Sensitivity
    NOTE: While using the product, please make sure that the music playing machine is properly on and the input jacks work correctly. Microphone's wire should be properly fitted to the machine so that there is no disturbance or issues. Also ensure that the that the power is on.
    `,
      price: 20,
      category: "electronics",
      reviewsNumber: 10,
      countInStock: 15,
      rating: 4.2,
      brand: "gamdias",
    },
    {
      id: 2,
      title: "Headphones",
      image: "https://m.media-amazon.com/images/I/81-R7tWdkqL._AC_SL1500_.jpg",
      description: `Active noise canceling
      True wireless freedom
      Ambient mode
      Rapid charge
      22 hours battery life`,
      price: 47,
      category: "electronics",
      reviewsNumber: 12,
      countInStock: 126,
      rating: 4.9,
      brand: "skullcandy",
    },
    {
      id: 3,
      title: "Earphones",
      image: "https://m.media-amazon.com/images/I/61vx+uvwKmL._AC_SL1500_.jpg",
      description: `True HD High Fidelity Sound. Update Bluetooth Headphones own LATEST Bluetooth 5.1 CSR technology and IMPROVE acoustic components that produce incredible sound quality with deep bass and crystal clear treble`,
      price: 13.7,
      category: "electronics",
      reviewsNumber: 22,
      countInStock: 37,
      rating: 4.1,
      brand: "beats",
    },
    {
      id: 4,
      title: "Fit Pants",
      image:
        "https://ae01.alicdn.com/kf/HTB1wgQgaROD3KVjSZFFq6An9pXaw/KSTUN-Men-s-Jeans-2021-Summer-Denim-Pants-Slim-Straight-Dark-Blue-Regular-Fit-Leisure-Long.jpg_220x220xz.jpg_.webp",
      description: `2021 Men's and Female Jogging Exercise Fitness Pants Elastic Hip Hop Tight Sports Pants Pee Casual Male Pants Soft `,
      price: 11.92,
      category: "pants",
      reviewsNumber: 9,
      countInStock: 18,
      rating: 3.8,
      brand: "zara",
    },
    {
      id: 5,
      title: "Jogging pants",
      image:
        "https://ae01.alicdn.com/kf/Hfba67d7e32a34e05b2a7260f8bb7895aQ/2021-Men-s-and-Female-Jogging-Exercise-Fitness-Pants-Elastic-Hip-Hop-Tight-Sports-Pants-Pee.jpg_220x220xz.jpg_.webp",
      description: `2021 Winter Women Gym Sweatpants Workout Fleece Trousers Solid Thick Warm Winter Female Sport Pants Running Pantalones Mujer`,
      price: 20,
      category: "pants",
      reviewsNumber: 14,
      countInStock: 215,
      rating: 4.4,
      brand: "puma",
    },
    {
      id: 6,
      title: "Gym Pants",
      image:
        "https://ae01.alicdn.com/kf/Hd2b5a3fc19fe4562b1352126f572b6e3J/Men-s-Sports-Jogging-Pants-Casual-Pants-Daily-Training-Cotton-Breathable-Running-Sweatpants-Tennis-Soccer-Play.jpg_220x220xz.jpg_.webp",
      description: `Men's Sports Jogging Pants Casual Pants Daily Training Cotton Breathable Running Sweatpants Tennis Soccer Play Gym Trousers  `,
      price: 119,
      category: "pants",
      reviewsNumber: 45,
      countInStock: 36,
      rating: 4.3,
      brand: "sweatpants",
    },
    {
      id: 7,
      title: "Zipper Hoodie",
      image:
        "https://ae01.alicdn.com/kf/Hc30bb9ce87dd46ba81b1ff89076cdcd3l.jpg",
      description: `Men's Zipper Hoodie Jacket Man Coats Bomber Scarf Collar Hoodies Casual Male Hooded Outwear Slim Fit Hoody Spring Autumn New  `,
      price: 10.36,
      category: "shirts",
      reviewsNumber: 28,
      countInStock: 19,
      rating: 4.6,
      brand: "hoodymoody",
    },
    {
      id: 8,
      title: "Pug T-shirt",
      image:
        "https://ae01.alicdn.com/kf/H62f0248b07cf491984288a13ea149cc8T/100-cotton-casual-pug-life-mens-t-shirts-fashion-go-home-or-go-hard-men-tshirt.jpg_220x220xz.jpg_.webp",
      description: `100% cotton casual pug life mens t shirts fashion go home or go hard men tshirt men's tee shirts tops men T-shirt men tee shirts`,
      price: 2.6,
      category: "shirts",
      reviewsNumber: 16,
      countInStock: 188,
      rating: 4.8,
      brand: "coolmind",
    },
    {
      id: 9,
      title: "Pocket Shirt",
      image:
        "https://ae01.alicdn.com/kf/H4e95fe4a8b544b3da9f49ccd73fab023o/New-Fashion-Dark-Green-Lady-Elegant-Office-Blouse-Stand-up-Collar-Buttons-Pocket-Shirt-Top-Spring.jpg_220x220xz.jpg_.webp",
      description: `New Fashion Dark Green Lady Elegant Office Blouse Stand-up Collar Buttons Pocket Shirt Top Spring Autumn 2022 Solid Spot Women's`,
      price: 10.77,
      category: "shirts",
      reviewsNumber: 25,
      countInStock: 27,
      rating: 4.9,
      brand: "elsvios",
    },
    {
      id: 10,
      title: "Microphone",
      image:
        "data:image/jpeg;base64,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",
      description: `No Batteries required Karaoke Accessory Uni-directional Dynamic Microphone. Product Dimension- 2.0 W x 2.0 L x 8.9 H Inches Wide Frequency Response & High Sensitivity
    NOTE: While using the product, please make sure that the music playing machine is properly on and the input jacks work correctly. Microphone's wire should be properly fitted to the machine so that there is no disturbance or issues. Also ensure that the that the power is on.
    `,
      price: 20,
      category: "electronics",
      reviewsNumber: 10,
      countInStock: 15,
      rating: 4.2,
      brand: "gamdias",
    },
  ],
};
export default products;
