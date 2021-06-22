var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin , X-Requested-With , Content-Type , Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
const port = 2410;
let cameras = [
  {
    pics: {
      brand: "Nikon",
      brandImg: "https://i.ibb.co/w6NfnS2/niko.jpg",
      imgList: ["https://i.ibb.co/HdR6rGd/32.jpg"],
    },
    prod: {
      assured: true,
      brand: "DSLR",

      category: "Camera",
      details: [
        " D5600 DSLR Camera Body with Dual Lens",
        "AF-P DX Nikkor 18 - 55 MM F/3.5-5.6G AF-P DX Nikkor 18 - 55 MM F/3.5-5.6G",
        "16 GB SD Card",
        "Black",
        "Sensor Type: CMOS",
        "Effective Pixels: 24.2 MP",
        "1080p recording at 30p",
      ],
      discount: 24,
      emi: "No Cost EMI",
      exchange: "Upto ₹7,350 Off on Exchange",
      id: "ZA11",
      img: "https://i.ibb.co/HdR6rGd/32.jpg",
      name:
        "Nikon D5600 DSLR Camera Body with Dual Lens: AF-P DX Nikkor 18 - 55 MM F/3.5-5.6G VR and 70-300 MM F/4.5-6.3G ED VR (16 GB SD Card)  (Black)",
      popularity: 6000,
      prevPrice: 66450,
      price: 49990,

      pixel: 24.2,
      wifi: true,

      rating: "4.6",
      ratingDesc: "7831 Ratings & 1310 Reviews",
    },
  },

  {
    pics: {
      brand: "Nikon",
      brandImg: "https://i.ibb.co/w6NfnS2/niko.jpg",
      imgList: [
        "https://i.ibb.co/yRkh8vW/34.jpg",
        "https://i.ibb.co/Fs3K3Q7/33.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "DSLR",

      category: "Camera",
      details: [
        "Nikon D3500 DSLR Camera",
        "AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR",

        "Black",
        "Sensor Type: CMOS",
        "Effective Pixels: 24.2 MP",
        "1080p recording at 60p",
      ],
      discount: 14,
      emi: "No Cost EMI",
      exchange: "Upto ₹7,350 Off on Exchange",
      id: "ZA19",
      img: "https://i.ibb.co/yRkh8vW/34.jpg",
      name:
        "Nikon D3500 DSLR Camera AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR  (Black)",
      popularity: 10000,
      prevPrice: 36250,
      price: 30990,

      pixel: 24.2,
      wifi: false,

      rating: "3.0",
      ratingDesc: "10668 Ratings & 1738 Reviews",
    },
  },

  {
    pics: {
      brand: "Nikon",
      brandImg: "https://i.ibb.co/w6NfnS2/niko.jpg",
      imgList: [
        "https://i.ibb.co/D8PChSP/36.jpg",
        "https://i.ibb.co/mSz8NxC/37.jpg",
        "https://i.ibb.co/hsmdGtp/38.jpg",
      ],
    },
    prod: {
      assured: false,
      brand: "Lens",

      category: "Camera",
      details: [
        "Nikon AF-S",
        "NIKKOR 50mm f/1.8G Lens",
        "Black | 90",
        "Designed For: Nikon DSLRs",
        "Lens Type: Standard",
        "Prime Lens",
      ],
      discount: 30,
      emi: "No Cost EMI",
      exchange: "Upto ₹1,350 Off on Exchange",
      id: "ZA12",
      img: "https://i.ibb.co/D8PChSP/36.jpg",
      name: "Nikon AF-S NIKKOR 50mm f/1.8G Lens  (Black, 90)",
      popularity: 4000,
      prevPrice: 15650,
      price: 10890,

      pixel: 24.2,
      wifi: false,

      rating: "4.7",
      ratingDesc: "7184 Ratings & 1173 Reviews",
    },
  },

  {
    pics: {
      brand: "Sony",
      brandImg: "https://i.ibb.co/y87TBGY/sony.jpg",
      imgList: [
        "https://i.ibb.co/SRX6dLV/39.jpg",
        "https://i.ibb.co/rkzxG4q/40.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "Lens",

      category: "Camera",
      details: [
        "Sony DT ",
        "Sony DT 50mm f/1.8 SAM A-Mount Lens",
        "Designed For: Sony Alpha Cameras",
        "Lens Mount: A-mount",
        "Focal Length: 50mm mm",
        "Prime Lens",
      ],
      discount: 0,
      emi: "No Cost EMI",
      exchange: "Upto ₹1,350 Off on Exchange",
      id: "ZA12",
      img: "https://i.ibb.co/SRX6dLV/39.jpg",
      name: "Nikon AF-S NIKKOR 50mm f/1.8G Lens  (Black, 90)",
      popularity: 3000,
      prevPrice: 9990,
      price: 9990,

      pixel: 24.2,
      wifi: false,

      rating: "4.5",
      ratingDesc: "68 Ratings & 14 Reviews",
    },
  },

  {
    pics: {
      brand: "Nikon",
      brandImg: "https://i.ibb.co/w6NfnS2/niko.jpg",
      imgList: [
        "https://i.ibb.co/Fs3K3Q7/33.jpg",
        "https://i.ibb.co/HdR6rGd/32.jpg",
      ],
    },
    prod: {
      assured: false,
      brand: "DSLR",

      category: "Camera",
      details: [
        " D5612 DSLR Camera Body with Quad Lens",
        "AF-P DX Nikkor 20 - 55 MM F/3.5-5.6G AF-P DX Nikkor 18 - 55 MM F/3.5-5.6G",
        "64 GB SD Card",
        "Black | Gray",
        "Sensor Type: CMOS",
        "Effective Pixels: 20.2 MP",
        "1080p recording at 30p",
      ],
      discount: 20,
      emi: "No Cost EMI",
      exchange: "Upto ₹4,350 Off on Exchange",
      id: "ZA13",
      img: "https://i.ibb.co/Fs3K3Q7/33.jpg",
      name:
        "Nikon D5600 DSLR Camera Body with Quad Lens: AF-P DX Nikkor 20 - 55 MM F/3.5-5.6G VR and 70-300 MM F/4.5-6.3G ED VR (16 GB SD Card)  (Black)",
      popularity: 6000,
      prevPrice: 62450,
      price: 52990,

      pixel: 24.0,
      wifi: true,

      rating: "2.1",
      ratingDesc: "651 Ratings & 10 Reviews",
    },
  },

  {
    pics: {
      brand: "Nikon",
      brandImg: "https://i.ibb.co/w6NfnS2/niko.jpg",
      imgList: [
        "https://i.ibb.co/znmjB3h/41.jpg",
        "https://i.ibb.co/1s3sD0Y/42.jpg",
      ],
    },
    prod: {
      assured: false,
      brand: "Tripods",

      category: "Camera",
      details: [
        "Rhobos YT-228",
        "Mobile Stand Tripod Phone Clip Holder Tripod",

        "Black | Supports Up to 750 g",
        "Designed For: Advanced Point & Shoot Camera",
        "Effective Pixels: 20.2 MP",
        "Height Range: 200 mm - 300 mm",
      ],
      discount: 67,
      emi: "No Cost EMI",
      exchange: "",
      id: "AX12",
      img: "https://i.ibb.co/znmjB3h/41.jpg",
      name:
        "Rhobos YT-228 Mobile Stand Tripod Phone Clip Holder Tripod  (Black, Supports Up to 750 g)",
      popularity: 6000,
      prevPrice: 1999,
      price: 1329,

      rating: "3.1",
      ratingDesc: "51 Ratings & 10 Reviews",
    },
  },

  {
    pics: {
      brand: "Nikon",
      brandImg: "https://i.ibb.co/w6NfnS2/niko.jpg",
      imgList: [
        "https://i.ibb.co/Fn27vL9/43.jpg",
        "https://i.ibb.co/1s3sD0Y/42.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "Tripods",

      category: "Camera",
      details: [
        "Rhobos YZ-228",
        "Mobile Stand Tripod Camera Clip Holder Tripod",

        "Black | Supports Up to 1000 g",
        "Designed For: Advanced Point & Shoot Camera",

        "Height Range: 200 mm - 300 mm",
      ],
      discount: 37,
      emi: "No Cost EMI",
      exchange: "",
      id: "AX18",
      img: "https://i.ibb.co/Fn27vL9/43.jpg",
      name:
        "Rhobos YT-228 Mobile Stand Tripod Camera Clip Holder Tripod  (Black, Supports Up to 750 g)",
      popularity: 3000,
      prevPrice: 2999,
      price: 1829,

      rating: "2.1",
      ratingDesc: "151 Ratings & 110 Reviews",
    },
  },

  {
    pics: {
      brand: "Nikon",
      brandImg: "https://i.ibb.co/w6NfnS2/niko.jpg",
      imgList: [
        "https://i.ibb.co/D4TJj1j/45.jpg",
        "https://i.ibb.co/0DJ5gJB/44.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "Tripods",

      category: "Camera",
      details: [
        "Designed For: DSLR/SLR Camera, Mobile, Point & Shoot Camera, Video Camera",
        "Mobile Stand Tripod Camera Clip Holder Tripod",

        "Load Capacity: 5000 g",
        "Designed For: Advanced Point & Shoot Camera",

        "Height Range: 580 mm - 1570 mm",
        "Number of Leg Sections: 3",
        "Material: Aluminum tube and Rubber Base",
      ],
      discount: 20,
      emi: "No Cost EMI",
      exchange: "",
      id: "AX99",
      img: "https://i.ibb.co/D4TJj1j/45.jpg",
      name: "Kodak T211 Tripod  (Black, Supports Up to 5000 g)",
      popularity: 2000,
      prevPrice: 3999,
      price: 3529,

      rating: "1.1",
      ratingDesc: "151 Ratings & 110 Reviews",
    },
  },

  {
    pics: {
      brand: "Nikon",
      brandImg: "https://i.ibb.co/w6NfnS2/niko.jpg",
      imgList: ["https://i.ibb.co/bWhXKrp/46.jpg"],
    },
    prod: {
      assured: true,
      brand: "Compact",

      category: "Camera",
      details: [
        "UV Filter",
        "for nikon af-p 18-55mm & nikon 70-300mm lens",

        "Pack of 6",
        "Designed For: Advanced Camera",
      ],
      discount: 57,
      emi: "No Cost EMI",
      exchange: "",
      id: "AX97",
      img: "https://i.ibb.co/bWhXKrp/46.jpg",
      name: "BOOSTY filter for af-p 18-55mm & 70-300mm lens UV Filter  (58 mm)",
      popularity: 1000,
      prevPrice: 2999,
      price: 1529,

      rating: "3.1",
      ratingDesc: "1151 Ratings & 1110 Reviews",
    },
  },
];
let laptops = [
  {
    pics: {
      brand: "Apple",
      brandImg: "https://i.ibb.co/xY1Z9GD/apple.jpg",
      imgList: [
        "https://i.ibb.co/GVDFBdy/1.jpg",
        "https://i.ibb.co/0fncYhr/2.jpg",
        "https://i.ibb.co/Jnn7s3R/3.jpg",
        "https://i.ibb.co/KmjkYTX/4.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "Apple",
      category: "Laptop",
      details: [
        "8 GB  | 128 GB SSD  ",
        "Mac OS Sierra",
        "13.3 inch HD+ LED Backlit Display",
        "Silver",
        "1.35 Kg | Light Laptop without Optical Disk Drive",
        "5000 mAh Battery",
        "Stylish & Portable Thin and Light Laptop",
      ],
      discount: 22,
      emi: "No Cost EMI",
      exchange: "Upto ₹7,350 Off on Exchange",
      id: "A1466",
      img: "https://i.ibb.co/GVDFBdy/1.jpg",
      name:
        "Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466  (13.3 inch, Silver, 1.35 kg)",
      popularity: 76670,
      prevPrice: 84900,
      price: 65990,
      ram: 8,
      processor: "Coer i5",
      rating: "4.7",
      ratingDesc: "24221 Ratings & 2,729 Reviews",
    },
  },

  {
    pics: {
      brand: "Apple",
      brandImg: "https://i.ibb.co/xY1Z9GD/apple.jpg",
      imgList: [
        "https://i.ibb.co/0MkYxbP/5.jpg",
        "https://i.ibb.co/X4qpD98/6.jpg",
        "https://i.ibb.co/Sfj0D0g/7.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "Apple",
      category: "Laptop",
      details: [
        "8 GB  | 128 GB SSD  ",
        "Mac OS Mojave",
        "13.3 inch Quad HD LED Backlit IPS Retina Display (True Tone Technology, Wide Color (P3), 500 nits Brightness)",
        "Space Grey",
        "1.37 Kg | Light Laptop without Optical Disk Drive",
        "Processing & Multitasking",
        "Stylish & Portable Thin and Light Laptop",
      ],
      discount: 12,
      emi: "No cost EMI starting from ₹8,750/month",
      exchange: "Upto ₹11,350 Off on Exchange",
      id: "MUHN2HN/A",
      img: "https://i.ibb.co/0MkYxbP/5.jpg",
      name:
        "Apple MacBook Pro Core i5 8th Gen - (8 GB/128 GB SSD/Mac OS Mojave) MUHN2HN/A  (13.3 inch, Space Grey, 1.37 kg)",
      popularity: 600,
      prevPrice: 119900,
      price: 104990,
      ram: 8,
      processor: "Coer i5",
      rating: "4.8",
      ratingDesc: "32 Ratings & 9 Reviews",
    },
  },

  {
    pics: {
      brand: "Apple",
      brandImg: "https://i.ibb.co/xY1Z9GD/apple.jpg",
      imgList: [
        "https://i.ibb.co/ggJ22Rz/8.jpg",
        "https://i.ibb.co/D8CsYyS/9.jpg",
        "https://i.ibb.co/f919dwr/10.jpg",
      ],
    },
    prod: {
      assured: false,
      brand: "Apple",
      category: "Laptop",
      details: [
        "16 GB  | 512 GB SSD  ",
        "Mac OS Catalina",
        "4 GB Graphics",
        "16 inch Quad HD LED Backlit IPS Retina Display (True Tone Technology, Wide Color (P3), 500 nits Brightness)",
        "Space Grey",
        "2kg | Light Laptop without Optical Disk Drive",
        "Processing & Multitasking",
        "Stylish & Portable Thin and Light Laptop",
      ],
      discount: 5,
      emi: "No cost EMI starting from ₹15,750/month",
      exchange: "Upto ₹11,350 Off on Exchange",
      id: "MVVJ2HN/A",
      img: "https://i.ibb.co/ggJ22Rz/8.jpg",
      name:
        "Apple MacBook Pro Core i7 9th Gen - (16 GB/512 GB SSD/Mac OS Catalina/4 GB Graphics) MVVJ2HN/A  (16 inch, Space Grey, 2 kg)",
      popularity: 400,
      prevPrice: 199900,
      price: 189000,
      ram: 16,
      processor: "Coer i7",
      rating: "4.9",
      ratingDesc: "21 Ratings & 4 Reviews",
    },
  },

  {
    pics: {
      brand: "Apple",
      brandImg: "https://i.ibb.co/xY1Z9GD/apple.jpg",
      imgList: [
        "https://i.ibb.co/m8qy7dg/11.jpg",
        "https://i.ibb.co/ZWhqCVX/12.jpg",
        "https://i.ibb.co/GxR1s5p/13.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "Apple",
      category: "Laptop",
      details: [
        "8 GB  | 256 GB SSD  ",
        "Mac OS Mojave",
        "13.3 inch Quad HD LED Backlit IPS Retina Display (True Tone Technology, Wide Color (P3), 500 nits Brightness)",
        "Gold",
        "1.25kg | Light Laptop without Optical Disk Drive",
        "Processing & Multitasking",
        "Stylish & Portable Thin and Light Laptop",
      ],
      discount: 5,
      emi: "No cost EMI starting from ₹10,666/month",
      exchange: "Upto ₹5,350 Off on Exchange",
      id: "MREF2HN/A",
      img: "https://i.ibb.co/m8qy7dg/11.jpg",
      name:
        "Apple MacBook Air Core i5 8th Gen - (8 GB/256 GB SSD/Mac OS Mojave) MREF2HN/A  (13.3 inch, Gold, 1.25 kg)",
      popularity: 900,
      prevPrice: 134900,
      price: 127990,
      ram: 8,
      processor: "Coer i3",
      rating: "4.7",
      ratingDesc: "222 Ratings & 20 Reviews",
    },
  },

  {
    pics: {
      brand: "HP",
      brandImg: "https://i.ibb.co/XkgpjwM/hp.jpg",
      imgList: [
        "https://i.ibb.co/wRy46FG/14.jpg",
        "https://i.ibb.co/1nqZQzw/15.jpg",
        "https://i.ibb.co/th3rFnK/16.jpg",
        "https://i.ibb.co/HnHMsG0/17.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "HP",
      category: "Laptop",
      details: [
        "8 GB  | 1TB HDD  ",
        "Window 10 Home",
        "15.6 inch Quad HD LED Backlit IPS Retina Display",
        "Smoke Grey",
        "1.77kg | Light Laptop without Optical Disk Drive",
        "15-da0414tu Thin and Light Laptop",
        "with MS Office",
      ],
      discount: 5,
      emi: "No cost EMI starting from ₹10,666/month",
      exchange: "Upto ₹3,350 Off on Exchange",
      id: "AZ1",
      img: "https://i.ibb.co/wRy46FG/14.jpg",
      name:
        "HP 15 Core i3 8th Gen - (8 GB/1 TB HDD/Windows 10 Home) 15-da0414tu Thin and Light Laptop  (15.6 inch, Smoke Grey, 1.77 kg, With MS Office)",
      popularity: 1900,
      prevPrice: 36055,
      price: 33990,
      ram: 8,
      processor: "Coer i3",
      rating: "4.2",
      ratingDesc: "51 Ratings & 4 Reviews",
    },
  },

  {
    pics: {
      brand: "HP",
      brandImg: "https://i.ibb.co/XkgpjwM/hp.jpg",
      imgList: [
        "https://i.ibb.co/8gSvxPf/18.jpg",
        "https://i.ibb.co/kxvw3TV/19.jpg",
        "https://i.ibb.co/yVsWY1F/20.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "HP",
      category: "Laptop",
      details: [
        "4 GB  | 256 GB SSD  ",
        "Window 10 Home",
        "14 inch Quad HD LED Backlit IPS Retina Display",
        "Natural Silver",
        "1.59kg | Light Laptop without Optical Disk Drive",
        "14-dh0107TU 2 in 1 Laptop ",
        "with MS Office",
      ],
      discount: 3,
      emi: "No cost EMI starting from ₹4,666/month",
      exchange: "Upto ₹1,350 Off on Exchange",
      id: "AZ2",
      img: "https://i.ibb.co/8gSvxPf/18.jpg",
      name:
        "HP Pavilion x360 Core i3 8th Gen - (4 GB/256 GB SSD/Windows 10 Home) 14-dh0107TU 2 in 1 Laptop  (14 inch, Natural Silver, 1.59 kg, With MS Office)",
      popularity: 1900,
      prevPrice: 45391,
      price: 43990,
      ram: 4,
      processor: "Coer i3",
      rating: "4.5",
      ratingDesc: "1116 Ratings & 135 Reviews",
    },
  },

  {
    pics: {
      brand: "Dell",
      brandImg: "https://i.ibb.co/jMs3fbC/dell.jpg",
      imgList: [
        "https://i.ibb.co/jyyJzKr/21.jpg",
        "https://i.ibb.co/bgTktd1/22.jpg",
        "https://i.ibb.co/xG6KdPK/23.jpg",
      ],
    },
    prod: {
      assured: false,
      brand: "Dell",
      category: "Laptop",
      details: [
        "4 GB  | 1 TB HDD  ",
        "Window 10 Home",
        "14 inch Quad HD LED Backlit IPS Retina Display",
        "Black",
        "1.79kg | Light Laptop",
        "3490 Thin ",
        "with MS Office",
      ],
      discount: 4,
      emi: "No cost EMI starting from ₹3,666/month",
      exchange: "Upto ₹1,050 Off on Exchange",
      id: "AZ3",
      img: "https://i.ibb.co/jyyJzKr/21.jpg",
      name:
        "Dell Vostro 3000 Core i3 10th Gen - (4 GB/1 TB HDD/Windows 10 Home) 3490 Thin and Light Laptop  (14.1 inch, Black, 1.79 kg, With MS Office)",

      popularity: 1900,
      prevPrice: 35557,
      price: 33990,
      ram: 2,
      processor: "Coer i3",
      rating: "4.0",
      ratingDesc: "64 Ratings & 7 Reviews",
    },
  },

  {
    pics: {
      brand: "Dell",
      brandImg: "https://i.ibb.co/jMs3fbC/dell.jpg",
      imgList: [
        "https://i.ibb.co/SrdyZmF/24.jpg",
        "https://ibb.co/tMg9RCB",
        "https://i.ibb.co/Sw6S9Bg/25jpeg.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "Dell",
      category: "Laptop",
      details: [
        "4 GB  | 1 TB HDD  ",
        "Linux",
        "14 inch Quad HD LED Backlit IPS Retina Display",
        "Black",
        "2.2kg | Light Laptop",
        "Core i3 7th Gen  ",
        "vos / vostro 3581",
      ],
      discount: 14,
      emi: "No cost EMI starting from ₹4,666/month",
      exchange: "Upto ₹10,050 Off on Exchange",
      id: "AZ4",
      img: "https://i.ibb.co/SrdyZmF/24.jpg",
      name:
        "Dell Vostro 15 3000 Core i3 7th Gen - (4 GB/1 TB HDD/Linux) vos / vostro 3581 Laptop  (15.6 inch, Black, 2.2 kg)",

      popularity: 1000,
      prevPrice: 32120,
      price: 27490,
      ram: 2,
      processor: "Coer i3",
      rating: "4.2",
      ratingDesc: "388 Ratings & 41 Reviews",
    },
  },

  {
    pics: {
      brand: "Acer",
      brandImg: "https://i.ibb.co/0Q42Bvy/acer.jpg",
      imgList: [
        "https://i.ibb.co/qsmY5Mw/26.jpg",
        "https://i.ibb.co/1dPZV4Y/27.jpg",
        "https://i.ibb.co/7X4w01L/28.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "Acer",
      category: "Laptop",
      details: [
        "8 GB  | 512 GB SSD  ",
        "Windows 10 Home",
        "4 GB Graphics | NVIDIA Geforce GTX 1650",
        "15.6 inch | Charcoal Black ",
        "2.15 kg",
        "Core i7 9th Gen  ",
        "A715-75G-50SA Gaming Laptop",
      ],
      discount: 31,
      emi: "No cost EMI starting from ₹7,666/month",
      exchange: "Upto ₹10,050 Off on Exchange",
      id: "AZ5",
      img: "https://i.ibb.co/qsmY5Mw/26.jpg",
      name:
        "Acer Aspire 7 Core i5 9th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650) A715-75G-50SA Gaming Laptop  (15.6 inch, Charcoal Black, 2.15 kg)",

      popularity: 8000,
      prevPrice: 79999,
      price: 54990,
      ram: 8,
      processor: "Coer i7",
      rating: "4.5",
      ratingDesc: "375 Ratings & 109 Reviews",
    },
  },

  {
    pics: {
      brand: "Acer",
      brandImg: "https://i.ibb.co/0Q42Bvy/acer.jpg",
      imgList: [
        "https://i.ibb.co/nQsB2ZS/29.jpg",
        "https://i.ibb.co/w0w4HcF/30.jpg",
        "https://i.ibb.co/hKpVDRd/31.jpg",
      ],
    },
    prod: {
      assured: true,
      brand: "Acer",
      category: "Laptop",
      details: [
        "16 GB  | 1 TB HDD | 256 GB SSD  ",
        "Windows 10 Home",
        "6 GB Graphics | NVIDIA Geforce GTX 1660 Ti",
        "17.3 inch | Abyssal Black ",
        "2.93 kg",
        "Core i7 9th Gen  ",
        "ph317-53-57mw Gaming Laptop",
      ],
      discount: 40,
      emi: "No cost EMI starting from 10,666/month",
      exchange: "Upto ₹9,050 Off on Exchange",
      id: "AZ6",
      img: "https://i.ibb.co/nQsB2ZS/29.jpg",
      name:
        "Acer Predator Helios 300 Core i5 9th Gen - (16 GB/1 TB HDD/256 GB SSD/Windows 10 Home/6 GB Graphics/NVIDIA Geforce GTX 1660 Ti) ph317-53-57mw Gaming Laptop  (17.3 inch, Abyssal Black, 2.93 kg)",

      popularity: 2000,
      prevPrice: 149999,
      price: 89990,
      ram: 16,
      processor: "Coer i7",
      rating: "4.9",
      ratingDesc: "57 Ratings & 21 Reviews",
    },
  },

  {
    pics: {
      brand: "HP",
      brandImg: "https://i.ibb.co/XkgpjwM/hp.jpg",
      imgList: [
        "https://i.ibb.co/th3rFnK/16.jpg",
        "https://i.ibb.co/wRy46FG/14.jpg",
        "https://i.ibb.co/1nqZQzw/15.jpg",

        "https://i.ibb.co/HnHMsG0/17.jpg",
      ],
    },
    prod: {
      assured: false,
      brand: "HP",
      category: "Laptop",
      details: [
        "2 GB  | 256 GB HDD  ",
        "Window 8 ",
        "13 inch Display",
        "Smoke Red",
        "1.30kg | Light",
        "13-da0414tu Thin and Light Laptop",
        "with MS Office",
      ],
      discount: 2,
      emi: "No cost EMI starting from ₹10,666/month",
      exchange: "Upto ₹3,350 Off on Exchange",
      id: "AD0",
      img: "https://i.ibb.co/th3rFnK/16.jpg",
      name:
        "HP 13 Core i3 6th Gen - (2 GB/256 GB HDD/Windows 8 ) 13-da0414tu Thin and Light Laptop  (15.6 inch, Smoke Grey, 1.77 kg, With MS Office)",
      popularity: 900,
      prevPrice: 22055,
      price: 18000,
      ram: 2,
      processor: "Coer i3",
      rating: "2.2",
      ratingDesc: "51 Ratings & 40 Reviews",
    },
  },
];

app.listen(port, () => console.log("Listening on port : ", port));

app.get("/product/Laptop/:id", function (req, res) {
  let id = req.params.id;

  let index = laptops.findIndex((n) => n.prod.id === id);
  if (index === -1) {
    res.send("Bad Request, Item not Fount");
  } else {
    res.send(laptops[index]);
  }
});

app.get("/product/Camera/:id", function (req, res) {
  let id = req.params.id;

  let index = cameras.findIndex((n) => n.prod.id === id);
  if (index === -1) {
    res.send("Bad Request, Item not Fount");
  } else {
    res.send(cameras[index]);
  }
});

app.get("/products/:catg/?:brand", function (req, res) {
  let catg = req.params.catg;

  catg =
    catg === ("L" || "Laptops")
      ? "Laptop"
      : catg === ("C" || "Cameras")
      ? "Camera"
      : catg;
  let brand = req.params.brand;
  console.log(brand);
  brand = brand === ("aptop" || "aptops") ? undefined : brand;
  brand = brand === "amera" ? undefined : brand;
  let ram = req.query.ram;
  let sort = req.query.sort;
  let rating = req.query.rating;
  let assured = req.query.assured;
  let price = req.query.price;
  let page = req.query.page;
  let q = req.query.q;
  page = page ? page : 1;
  let pageSize = 5;
  console.log(catg, brand, ram, sort, rating, assured, price, q, page);
  let outArr = [];
  if (catg === "Laptops") {
    outArr = laptops.map((n) => n.prod);
  } else {
    outArr = cameras.map((n) => n.prod);
  }
  console.log(brand);

  if (brand !== undefined) {
    outArr = outArr.filter((n) => n.brand === brand);
  }

  if (ram) {
    let ram1 = ram.split(",");

    outArr = outArr.filter((obj) =>
      ram1.find((r) =>
        r === ">=6" || r === ">6"
          ? obj.ram >= 6
          : r === "<=4" || r === "<4"
          ? obj.ram <= 4
          : r === "<=3" || r === "<3"
          ? obj.ram <= 3
          : obj.ram <= 2
      )
    );
  }

  if (rating) {
    let rating1 = rating.split(",");
    outArr = outArr.filter((obj) =>
      rating1.find((r) =>
        r === ">4"
          ? obj.rating > 4
          : r === ">3"
          ? obj.rating > 3
          : r === ">2"
          ? obj.rating > 2
          : obj.ram > 1
      )
    );
  }

  if (price) {
    let price1 = price.split(",");
    outArr = outArr.filter((obj) =>
      price1.find((r) =>
        r === "0-5000"
          ? obj.price > 0 && obj.price < 5000
          : r === "5000-10000"
          ? obj.price > 5000 && obj.price < 10000
          : r === "10000-20000"
          ? obj.price > 10000 && obj.price < 20000
          : obj.price > 20000
      )
    );
  }

  if (q) {
    outArr = outArr.filter((obj) => obj.brand === q || obj.category === q);
  }

  if (assured) {
    if (assured === "true") {
      outArr = outArr.filter((obj) => obj.assured === true);
    }
    if (assured === "false") {
      outArr = outArr.filter((obj) => obj.assured === false);
    }
  }

  if (sort) {
    outArr = outArr.sort(sortFn);
    function sortFn(n1, n2) {
      if (sort === "asc") {
        let t1 = n1.price;
        let t2 = n2.price;
        if (t1 > t2) return 1;
        if (t1 < t2) return -1;
        if (t1 === t2) return 0;
      }

      if (sort === "desc") {
        let t1 = n1.price;
        let t2 = n2.price;
        if (t1 < t2) return 1;
        if (t1 > t2) return -1;
        if (t1 === t2) return 0;
      }

      if (sort === "popularity") {
        let t1 = n1.popularity;
        let t2 = n2.popularity;
        if (t1 > t2) return 1;
        if (t1 < t2) return -1;
        if (t1 === t2) return 0;
      }
    }
  }

  let startIndex = (page - 1) * pageSize;
  let tempApp = [...outArr];
  let arr = tempApp.splice(startIndex, pageSize);
  let max = outArr.length / 5;
  max = Math.ceil(max);

  // outArr = outArr.filter((obj) => obj.Gender === Gender);

  res.send({
    data: arr,
    pageInfo: {
      pageNumber: page,
      numberOfPages: max,
      numOfItems: arr.length,
      totalItemCount: outArr.length,
    },
  });
});
