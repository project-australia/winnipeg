import { instanceOf } from "prop-types";
import { User } from "../../../domain/user";

export const UserPropTypes = instanceOf(User);
