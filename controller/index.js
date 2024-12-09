const shop = [{
    Cow:1,
    Pig:1,
    Vegetable:1,
    Egg:1
}
]

const indexController = (req,res) =>{
    res.render("home",{data:shop})
 }

const addController = (req,res) =>{
    const input = String(req.body.name)
    shop[0][input] += 1 
    res.render("home",{data:shop})
}

const reduceController = (req,res) =>{
    const input = String(req.body.name)
    shop[0][input] -= 1 
    res.render("home",{data:shop})
}

const addNewController = (req,res) =>{
     const input = String(req.body.product)

    shop[0]=({
        Cow:shop[0].Cow,
        Pig:shop[0].Pig,
        Vegetable:shop[0].Vegetable,
        Egg:shop[0].Egg,
        input:1
    })
    console.log(shop)
    res.render("home",{data:shop})
}

const submitController = (req,res) =>{
    
}
module.exports ={indexController,addController,reduceController,addNewController,submitController
    

}