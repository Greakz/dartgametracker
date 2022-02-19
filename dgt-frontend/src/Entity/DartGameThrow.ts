export type DartGameThrowType = 'SINGLE' | 'DOUBLE' | 'TRIPPLE'

export interface DartGameThrow {
    number: number // name suggestion: "resultNumber"
    throwType: DartGameThrowType // name suggestion: "resultType"
    result: number //  name suggestion: "resultValue"
}