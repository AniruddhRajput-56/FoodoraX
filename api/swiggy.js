export default async function handler(req, res) {
  const response = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0386956&lng=72.6307533&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://www.swiggy.com/",
        "Origin": "https://www.swiggy.com",
      },
    }
  );
  const data = await response.json();

 res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}