const fs = require('fs');

// fs.writeFileSync('./demo.txt', "Data to be written in the file");
// fs.writeFile('./demo.txt', "New Data overwritten", (err) =>
// {
//     if (err) console.error(err);
// })

// const data = fs.readFileSync('./demo.txt', 'utf-8');
// console.log(data);

// fs.readFile('./demo.txt', 'utf-8', (err, data) =>
// {
//     if (err)
//     {
//         console.error(err);
//     }
//     else
//     {
//         console.log(data);
//     }
// })

// fs.appendFile('./demo.txt', '\nNew data appended in the end', (err) =>
// {
//     if (err)
//     {
//         console.error(err)
//     }
//     else
//     {
//         console.log("Data appended succesfully")
//     }
// })

// fs.unlink('./demo.txt', (err) =>
// {
//     if (err) console.log(err);
// })

// const bool = fs.existsSync('./demo.txt')
// console.log(bool);

// fs.mkdir('./Files', { recursive: false }, (err) =>
// {
//     if (err) console.log(err);
// })

// fs.rmdir('./Files', (err) =>
// {
//     if (err) console.log(err)
// })
// 