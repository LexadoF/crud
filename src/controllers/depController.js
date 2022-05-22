const controller ={

};

controller.list =  (req, res) => {
    req.getConnection((err, conn) => {
        if(err){
            next(err);
        }
        conn.query('SELECT * FROM departamento', (err, rows)=>{
            if(err){
                next(err);
            }
            res.render('departament', {
                data: rows
            })
        });
    });
};

controller.save = (req, res) =>{
    const data= req.body;
    req.getConnection((err,conn) =>{
        if(err){
            next(err);
        }
        conn.query('INSERT INTO departamento set ?', [data], (err, rows) =>{
            res.redirect('/');
        });
    })
};

controller.edit= (req, res) =>{
    const {id}= req.params;
    req.getConnection((err, conn)=>{

        conn.query('SELECT * FROM departamento WHERE codigo = ?', [id], (err,row)=>{
            res.render('dep_edit', {
                data: row[0]
            });
        });
    });
};

controller.update = (req, res)=>{

    const {id}= req.params;
    const newDep = req.body;
    req.getConnection((err, conn)=>{
        conn.query('UPDATE departamento set ? WHERE codigo = ?', [newDep, id], (err, rows)=>{
            res.redirect('/');
        });
    });

};

controller.delete = (req, res) =>{
    const {id}= req.params;
    req.getConnection((err, conn)=>{
        if(err){
            next(err);
        }
        conn.query('DELETE FROM departamento WHERE codigo = ?', [id], (err,row)=>{
            res.redirect('/');
        })
    })
};

module.exports = controller;