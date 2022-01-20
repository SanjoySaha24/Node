//OS Feature
let os = require("os");
console.log(os.arch());
console.log(os.platform());
console.log(os.networkInterfaces());
console.log(os.cpus());
 
// Output - x64
//          win32
// {
//     'Wi-Fi 3': [
//       {
//         address: 'fe80::ed7c:5b49:888c:e038',
//         netmask: 'ffff:ffff:ffff:ffff::',    
//         family: 'IPv6',
//         mac: '00:45:e2:35:73:8f',
//         internal: false,
//         cidr: 'fe80::ed7c:5b49:888c:e038/64',
//         scopeid: 15
//       },
//       {
//         address: '192.168.0.115',
//         netmask: '255.255.255.0',
//         family: 'IPv4',
//         mac: '00:45:e2:35:73:8f',
//         internal: false,
//         cidr: '192.168.0.115/24'
//       }
//     ],
//     'Loopback Pseudo-Interface 1': [
//       {
//         address: '::1',
//         netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//         family: 'IPv6',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '::1/128',
//         scopeid: 0
//       },
//       {
//         address: '127.0.0.1',
//         netmask: '255.0.0.0',
//         family: 'IPv4',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '127.0.0.1/8'
//       }
//     ]
//   }

