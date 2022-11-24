// app.put('/datas/:egyediAzonosito',bodyParser.json(), (req, res) => {
//     const id = req.params.egyediAzonosito;

//     fs.readFile('./data/datas.json', (err, file) => {
//         const datas = JSON.parse(file);
//         const dataIndexById = datas.findIndex(data => data.id === id);

//         if(dataIndexById === -1) {
//             res.status(404);
//             res.send({error: `id: ${id} not found`});
//             return;
//         }

//         const updatedData = {
//             id: id,
//             name: sanitizeString(req.body.name),
//             merchantName : sanitizeString(req.body.merchantName),
//             workLocation: sanitizeString(req.body.workLocation),
//             taxNumber : sanitizeString(req.body.taxNumber),
//             banAccountNumber:sanitizeString(req.body.banAccountNumber),
//             email: sanitizeString(req.body.email),
//             emailServer : sanitizeString(req.body.emailServer),
//             checkbox: Boolean(req.body.checkbox),
//             endTime: sanitizeString(req.body.endTime),
//           };

//           datas[dataIndexById] = updatedData;
//         fs.writeFile('./data/datas.json', JSON.stringify(datas), () => {
//             res.send(updatedData);
//         });
//     });
// });