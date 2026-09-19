const coffeGet = async () => {
  const response = await fetch(
    "https://vodtvaubuvisrnenysir.supabase.co/rest/v1/coffee_hot?select=*",
    {
      headers: {
        apikey: "sb_publishable_YTi5JPAbAGIZfPrTb6GoVA_f5B14QB3",
        Authorization: "Bearer sb_publishable_YTi5JPAbAGIZfPrTb6GoVA_f5B14QB3",
      },
    }
  );
  const data = await response.json();
  return data;
};

export { coffeGet };
