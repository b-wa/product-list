const router = require("express").Router()
const faker = require('faker')
const Product = require("../models/product")
const Review = require("../models/review")



router.get("/generate-fake-data", (req, res, next) => {
    for(let i = 0; i < 90; i++) {
        let product = new Product()

        product.category = faker.commerce.department()
        product.name = faker.commerce.productName()
        product.price = faker.commerce.price()
        product.image = "https://www.oysterdiving.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png"
        product.reviews = []

        let review = new Review()

        review.userName = faker.name.firstName()
        review.reviewText = faker.lorem.sentence()
        review.product = product._id

        review.save()
        product.reviews.push(review)

        product.save((err) => {
            if (err) throw err
        })
    }
    res.end()
})


//implementing pagination
router.get("/products", (req, res, next) => {
    const perPage = 9
    const page = req.query.page || 1
    Product
        .find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, products) => {
            Product.count().exec((err, count) => {
                if (err) return next(err)
                //console.log(products)
                res.send(products)
            })
        })
    })

//getting the products by product id
router.get("/products/:product", (req, res) => {
    const {_id} = req.params.product
    Product.findById(_id, (err, product) => {
        if (err) throw err;
        //console.log(product)
    });
});

router.get("/reviews", (req, res) => {
    Review.find((err, reviews) => {
        Review.populate(reviews, {path: 'reviews'}, (err, data) => {
            console.log(data);
            res.send(reviews);
        });
    });
});
module.exports = router