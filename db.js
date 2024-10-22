const sql=require("mysql2")
require("dotenv").config()

const con=sql.createPool(
    {
        host:process.env.host,
        port:process.env.port,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database,
    }
)

function getWinners()
{
    return new Promise(function(success,reject)
{
    con.query(`select * from PSL_Winners`, function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
}

function getWinner(id)
{
    return new Promise(function(success,reject)
{
    con.query(`select * from PSL_Winners where Time=?`, [id],function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
    
}

function addData(ti,ye,wi,ru)
{
    return new Promise(function(success,reject)
{
    con.query(`insert into PSL_Winners(Time,Year,Winner,Runner_Up) values(?,?,?,?)`,[ti,ye,wi,ru], function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
    
}

function updateData(ti,ye,wi,ru,id)
{
    return new Promise(function(success,reject)
{
    con.query(`update PSL_Winners set Time=?, Year=?,Winner=?,Runner_Up=? where Time=?`,[ti,ye,wi,ru,id], function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
    
}

function deleteData(id)
{
    return new Promise(function(success,reject)
{
    con.query(`delete from PSL_Winners where Time=?`,[id],function(err,res)
{
    if(err)
    {
        reject(err)
    }
    else
    {
        success(res)
    }
})
})
    
}

module.exports={getWinners,getWinner,addData,updateData,deleteData}