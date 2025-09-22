export async function loadBlogPosts() {
  const SHEET_ID = "1uB83-nhx1Ql5BkFWACMtHHAfrQZZ1SXvhSO1VaX3Zts";
  const SHEET_NAME = "BlogPosts";
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_NAME}&tqx=out:json`;

  const res = await fetch(url);
  const text = await res.text();

  
  const json = JSON.parse(text.substr(47).slice(0, -2));

  const cols = json.table.cols.map(col => col.label);

  const rows = json.table.rows.map(row => {
    const obj = {};
    row.c.forEach((cell, i) => {
      const key = cols[i];
      const value = cell?.v || "";

      if (key === "date") {
        if (typeof value === "string" && value.startsWith("Date(")) {
          const match = value.match(/Date\((\d+),(\d+),(\d+)\)/);
          if (match) {
            const [_, year, month, day] = match;
            obj[key] = new Date(Number(year), Number(month), Number(day));
          } else {
            obj[key] = null;
          }
        } else if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
          obj[key] = new Date(value); // ISO-Format
        } else if (value instanceof Date) {
          obj[key] = value;
        } else {
          obj[key] = null;
        }
      } else {
        obj[key] = value;
      }
    });
    return obj;
  });
  return rows;
}
