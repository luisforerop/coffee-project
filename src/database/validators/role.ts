import { CustomValidator } from "express-validator";
import { RoleModel } from "../../roles/role.schema";

export const roleValidator: CustomValidator = async (role: string) => {
	const existRole = await RoleModel.findOne({ role })
	if(!existRole) {
		throw new Error(`The role ${role} no exist.`)
	}
}