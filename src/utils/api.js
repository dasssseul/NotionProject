const API_END_POINT = "https://kdt.roto.codes";

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-username": "dasseul",
      },
    });
    if (res.ok) {
      return await res.json();
    }
    throw new Error("API 처리중 오류 발생");
  } catch (e) {
    alert(e.message);
  }
};
