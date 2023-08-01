import { Person } from "./person"
import { PersonType } from "../enums/person"

type Child = Person & {
    type: PersonType.Child
}