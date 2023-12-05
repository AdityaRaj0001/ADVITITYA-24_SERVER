# Add the routes file here

## for example we have the user routes specified below

```javascript
import express from "express";
import { signin } from "../controllers/user.js";

const router = express.Router();

router.post('/signin', signin);

export default router;

```