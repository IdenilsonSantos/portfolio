export default class fetchData {
  static formatResponse(response: any) {
    if (response) {
      return response.json();
    }
    throw new Error("Something went wrong");
  }

  static getHeaders() {
    return {
      "Content-type": "application/json",
    };
  }

  static async post(url: string, data: any) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    }).then(this.formatResponse);
  }
}
