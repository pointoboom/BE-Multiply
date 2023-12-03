import { Router } from "express";
import { protect } from "../../middlewares/protect.js";
const multiply = Router();
multiply.get("/", protect, (req, res) => {
    if (!req.query.a || !req.query.b) {
        return res.status(422).json({
            error: "Unsupported data format",
        });

    }
    const firstNumber = Number(req.query.a);
    const secondNumber = Number(req.query.b);
    const result = firstNumber * secondNumber;
    res.send({ result: JSON.stringify(result) });
});

export default multiply;
