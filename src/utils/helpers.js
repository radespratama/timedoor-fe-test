export const saveLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  const result = localStorage.getItem(key);

  if (result) {
    return JSON.parse(result);
  }

  return null;
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const currencyFormatter = (value, type) => {
  const listCurrency = {
    USD: "en-US",
    VND: "vi-VN",
    IDR: "id-ID",
    EUR: "de-DE",
  };

  if (!listCurrency[type] || isNaN(value)) {
    return "";
  }

  return new Intl.NumberFormat(listCurrency[type], {
    style: "currency",
    currency: type,
  }).format(value);
};

export const defaultValueSelectedPizza = () => {
  return {
    pizza: {
      id: 0,
      name: "",
      price: 0,
      discount: {
        is_active: false,
        final_price: 0,
      },
    },
    size: {
      price: 0,
    },
    topping: [],
  };
};
