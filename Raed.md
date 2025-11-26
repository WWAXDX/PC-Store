nav {
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    position: relative;
    text-decoration: none;
    color: black;
    font-weight: 500;

    .cart-badge {
      position: absolute;
      top: -8px;
      right: -12px;
      background: red;
      color: white;
      border-radius: 50%;
      padding: 2px 6px;
      font-size: 12px;
    }
  }
}
