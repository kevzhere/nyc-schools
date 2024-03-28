import { SchoolSatInterface } from "../../interfaces/interfaces"

export const mergeDataByKey = ( ...lists: [SchoolSatInterface[]] ): SchoolSatInterface[] =>
Object.values(
    lists.reduce(
        ( idx: any, list ) => {
            list.forEach( ( data ) => {
                if( idx[data?.dbn] )
                    idx[data?.dbn] = Object.assign( idx[ data.dbn ], data)
                else
                    idx[data.dbn] = data
            } )
            return idx
        },
        {}
    )
)