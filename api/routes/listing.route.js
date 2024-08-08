import express from "express";
import { verifyToken } from "../utils/verifyuser.js";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
  getData,
} from "../controllers/listing.controller.js";
// import { getUserListings } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);
router.get("/data", getData);

export default router;
