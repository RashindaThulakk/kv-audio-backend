export function getStudents(req,res){
    res.json({
        message : "This is a get request from Student route"
    })
}

export function postStudents(req,res){
    res.json({
        message : "This is a post request from Student route"
    })
}