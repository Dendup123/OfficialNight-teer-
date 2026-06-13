fetch("data.json")
.then(res => res.json())
.then(data => {

  // latest result
  let latest = data[0];
  document.getElementById("date").innerText = latest.date;
  document.getElementById("fr").innerText = latest.fr;
  document.getElementById("sr").innerText = latest.sr;

  // history table
  let table = "<tr><th>Date</th><th>FR</th><th>SR</th></tr>";

  data.forEach(d => {
    table += `
      <tr>
        <td>${d.date}</td>
        <td>${d.fr}</td>
        <td>${d.sr}</td>
      </tr>
    `;
  });

  document.getElementById("history").innerHTML = table;

  // common numbers
  let nums = [];
  data.forEach(d=>{
    nums.push(d.fr);
    nums.push(d.sr);
  });

  let freq = {};
  nums.forEach(n=>{
    freq[n]=(freq[n]||0)+1;
  });

  let sorted = Object.entries(freq)
  .sort((a,b)=>b[1]-a[1]);

  document.getElementById("common").innerText =
    sorted.slice(0,3).map(x=>x[0]).join(", ");
});
