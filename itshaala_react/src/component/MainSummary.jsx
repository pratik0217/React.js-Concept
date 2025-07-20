import React from 'react'

const EmployeeInfo = {
  empName : "Prateek Jadhav",
  company : "Excellent Minds Solution",
  Role : "React Frontend Web Developer"
}

export function MainSummary() {
  return (
    <div>
      <h1>{EmployeeInfo.company}</h1>
      <address>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus cumque libero nemo ab reprehenderit quo! Perferendis iste modi, aliquam nihil at ea placeat reiciendis esse quia distinctio repellat explicabo, sequi neque suscipit. Ratione excepturi neque veritatis repellat quo possimus inventore deleniti aut tenetur cumque, necessitatibus nihil provident atque perspiciatis odio pariatur enim? Repellendus quam quaerat iste dolorum, qui debitis commodi quod veritatis, doloremque inventore ab cumque rerum placeat. Consectetur aut quae doloribus architecto esse, nostrum ratione autem dolor voluptatum amet ipsam nesciunt praesentium cum. Repellat, non? Tempora reprehenderit maiores unde rem adipisci fugiat reiciendis? Autem, praulla ut ipsam porro? Non autem, veniam ea velit suscipit ipsa cupiditate harum excepturi minus inventore unde sit recusandae, fugiat porro.</p>
      </address>
    </div>
  )
}
