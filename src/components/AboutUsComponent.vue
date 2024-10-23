<template>
    <div class="about-us-container mt-4">
      <h2>About Us</h2>
      <div class="intro-section">
        <h3>Welcome to Our Beauty & Fragrance Store</h3>
        <p>
          At {{ storeName }}, we are passionate about providing the best beauty products and fragrances to help you look and feel your best. Our carefully curated selection includes everything from luxurious perfumes to must-have beauty essentials.
        </p>
      </div>
  
      <div class="mission-section">
        <h3>Our Mission</h3>
        <p>
          Our mission is to offer premium products at affordable prices, paired with outstanding customer service. Whether you're looking for the perfect fragrance or essential beauty items, we are committed to making your shopping experience seamless and enjoyable.
        </p>
      </div>
  
      <div class="products-section">
        <h3>What We Offer</h3>
        <ul>
          <li>A wide range of beauty products including mascara, eyeshadows, lipsticks, and more</li>
          <li>Top-notch fragrances from leading brands like Calvin Klein, Chanel, and Dior</li>
          <li>Exclusive discounts on select items</li>
          <li>Personalized customer support to help you find exactly what you need</li>
        </ul>
      </div>
  
      <div class="contact-section">
        <h3>Contact Us</h3>
        <p>If you have any questions or would like to inquire about a specific product, feel free to reach out to us:</p>
        <ul>
          <li><strong>Address:</strong> {{ address }}</li>
          <li><strong>Email:</strong> {{ email }}</li>
          <li><strong>Phone:</strong> {{ phone }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        storeName: "Glamour Beauty & Fragrance",
        address: "123 Beauty Lane, Glamour City, Country",
        email: "support@glamourbeauty.com",
        phone: "(123) 456-7890"
      };
    }
  };
  </script>
  
  <style scoped>
  .about-us-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #000000;
    color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .intro-section, .mission-section, .products-section, .contact-section {
    margin-bottom: 20px;
  }
  
  h3 {
    color: #007bff;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  .contact-section ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .contact-section li {
    margin-bottom: 5px;
  }
  </style>
  