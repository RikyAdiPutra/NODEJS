import dns from "dns/promises";

const addres = await dns.lookup("www.geogle.com");

console.info(addres.address);
console.info(addres.family);
