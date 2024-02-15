const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../util/wrapAsync.js");
const expressError = require("../util/expressError.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middlewire.js");

const reviewController = require("../controllers/reviews.js");

// Reviews
// Post Review Rout
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
// Delete Review Rout
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));  
module.exports = router;