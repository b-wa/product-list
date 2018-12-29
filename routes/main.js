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
router.get("/products?:page?:price", (req, res, next) => {
    const perPage = 9
    const page = req.query.page || 1
    let category = {}
    let price = {}

    if(req.query.category) {
        category = {"category": req.query.category};
    } else {
        options = null;
    }

    if(req.query.price) {
        if (req.query.price ==='lowest') {
            price = {"price": 1}
        } else if (req.query.price ==='highest') {
            price = {"price": -1}
        } else {
            options = null;
        }
    }

    Product
        .find(category)
        .sort(price)
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

//return a specific product by it's id
router.get("/products/:product", (req, res, next) => {
    const {_id} = req.params.product
    Product.findById(_id, (err, product) => {
        if (err) {
            return next (err);
        }
        res.send(product);
    })
})


//get the all the product reviews but limited to 40 at a time
router.get("/reviews", (req, res) => {
    Review
        .find({})
        .limit(40)
        .exec((err, reviews) => {
            Review.count().exec((err, count) => {
                if (err) return next(err)
                res.send(reviews)
            })
        })
    });

//add new products to the database
router.post("/products", (req, res) => {
    let newProduct = new Product({
        category: req.body.category,
        name: req.body.name,
        price: req.body.price,
        image: "https://www.oysterdiving.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png",
        reviews: []
    })
            
        newProduct.save((err) => {
            if (err) throw err;
            }) 
    res.send(newProduct);
})

//add new reviews for a specific product
router.post("/:product/reviews", (req, res) => {
    const productId = req.params.product;
    let newReview = new Review({
        userName: req.body.userName,
        reviewText: req.body.reviewText,
        product: productId
    })
    newReview.save()
    Product.findById(productId, (err, product) => {
        if (err) throw err;
        product.reviews.push(newReview);
        res.send(product)
    }).exec()
});

//delete a product by its id
router.delete("/products/:product", (req, res) => {
    const {_id} = req.params.product 
    Product.findByIdAndRemove(_id, (err, product) => {
        if (err) throw err;
        res.status(200).send("Product was successfully deleted");
    });
});

//delete a review by it's id
router.delete("/reviews/:review", (req, res) => {
    const {_id} = req.params.review
    Review.findByIdAndDelete(_id, (err, review) => {
        if (err) throw err;
        res.status(200).send("Review successfully deleted ");
    })
 });


module.exports = router