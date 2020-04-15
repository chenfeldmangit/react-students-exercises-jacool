import profile_back_img from "../img/profile-back.jfif";
import eilon_img from "../img/eilon.jfif";
import chen_img from "../img/chen.jfif";
import jacob_img from "../img/jacob.jpeg";
import bill_img from "../img/bill.jpg";

class InitialData {
}

export default InitialData;

InitialData.profile = {
    name: "Jacob Eckel",
    handle: "@eckely",
    bio: "Software developer since the last century",
    imgPath: jacob_img,
    background: profile_back_img
};

InitialData.posts = [
    {
        id: "56756733",
        author: "Chen Feldman",
        text: "Use setState to update it. Remember, state change = re-render!",
        authorImage: chen_img,
        like: false
    },
    {
        id: "15675751",
        author: "Eilon Reshef",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        authorImage: eilon_img,
        like: false
    },
    {
        id: "256757572",
        author: "Bill Gates",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        authorImage: bill_img,
        like: false
    },
    {
        id: "45675675674",
        author: "Jacob Eckel",
        text: "bla bla bla",
        authorImage: jacob_img,
        like: false
    },
    {
        id: "4545646575674",
        author: "Jacob Eckel",
        text: "tur la la",
        authorImage: jacob_img,
        like: false
    }
];

InitialData.mentions = [
    {
        id: "1214342",
        category: "like",
        author: "Eilon Reshef",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        authorImage: eilon_img
    },
    {
        id: "12143562",
        category: "follow",
        author: "Bill Gates",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
        authorImage: bill_img
    }
];


