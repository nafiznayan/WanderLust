const express = require("express");
const router = express.Router();
const wrapAsync = require("../util/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middlewire.js");
const listingContoller = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudconfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingContoller.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingContoller.createListing)
  );

// New rout
router.get("/new", isLoggedIn, listingContoller.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingContoller.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingContoller.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingContoller.destroyListing));

// Edit rout
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingContoller.renderEditForm)
);

module.exports = router;

// Index rout
// router.get("/",wrapAsync(listingContoller.index));
// Show rout
// router.get("/:id",wrapAsync(listingContoller.showListing));
// Create rout
// router.post("/",isLoggedIn,validateListing,wrapAsync(listingContoller.createListing));

// Updet rout
// router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(listingContoller.updateListing));
// // Delete rout
// router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingContoller.destroyListing));
