import { generateStreamToken, upsertStreamUser } from "../lib/stream.js";
import User from "../models/User.js";

export async function getStreamToken(req, res) {
  try {
    const authUser = req.user;
    const { targetUserId } = req.body || {};

    // Upsert authUser
    await upsertStreamUser({
      id: authUser._id.toString(),
      name: authUser.fullName,
      image: authUser.profilePic || "",
    });

    // Upsert target user if provided
    if (targetUserId) {
      const targetUser = await User.findById(targetUserId);
      if (targetUser) {
        await upsertStreamUser({
          id: targetUser._id.toString(),
          name: targetUser.fullName,
          image: targetUser.profilePic || "",
        });
      }
    }

    const token = generateStreamToken(authUser._id);
    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}