type FormDataType = {
  name: string;
  email: string;
  description: string;
};

export const postData = async (url: string, data: FormDataType) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();

    if (!response.ok) {
      throw new Error(res.message);
    }

    return res;
  } catch (error) {
    throw error;
  }
};
