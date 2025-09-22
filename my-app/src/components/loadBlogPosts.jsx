export async function loadBlogPosts() {
  const SHEET_ID = "1uB83-nhx1Ql5BkFWACMtHHAfrQZZ1SXvhSO1VaX3Zts";
  const SHEET_NAME = "BlogPosts";
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_NAME}&tqx=out:json`;

  const res = await fetch(url);
  const text = await res.text();

  // gviz liefert kein reines JSON → wir schneiden es zurecht
  const json = JSON.parse(text.substr(47).slice(0, -2));

  const cols = json.table.cols.map(col => col.label);

  const rows = json.table.rows.map(row => {
  const obj = {};
  row.c.forEach((cell, i) => {
    const key = cols[i];
    const value = cell?.v || "";

    // Robust: Nur konvertieren, wenn es wie ein Datum aussieht
    obj[key] = key === "date" && /^\d{4}-\d{2}-\d{2}$/.test(value)
      ? new Date(value)
      : value;
  });
  return obj;
});
  return rows;
}
