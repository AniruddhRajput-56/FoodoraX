export default async function handler(req, res) {
  const { restaurantId } = req.query;

  if (!restaurantId) {
    return res.status(400).json({ error: "restaurantId is required" });
  }

  const response = await fetch(
    `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6708317&lng=71.5723953&restaurantId=${restaurantId}`,
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