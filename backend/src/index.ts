import express from "express";
import { userRouter } from "./router/user";
import cors from "cors";
import { triggerRouter } from "./router/trigger";
import { actionRouter } from "./router/action";
import { zapRouter } from "./router/zap";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);

app.use("/api/v1/zap", zapRouter);

app.use("/api/v1/trigger", triggerRouter);

app.use("/api/v1/action", actionRouter);

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
