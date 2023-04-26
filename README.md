Made and maintained with love by [Appsmith](https://www.appsmith.com/). Contribute to this page by raising a PR on Github.

Website: [https://usage-based-pricing.vercel.app/](https://usage-based-pricing.vercel.app/)


### Adding Usage-based pricing vendors

1. Create a new `mdx` file inside the `/vendors` folder as `<vendor_name>.mdx`
2. Add the vendor details in the folloing format.
   ```
   ---
    title: Appsmith
    url: https://www.appsmith.com/pricing (Link to their pricing page)
    industry: Internal Tools
    usage_metrics: Hours (w/ a cap)
    links: https://www.appsmith.com/blog/usage-based-pricing (Annoucemnts / Related links)
    oss: OSS/NO
    type: Transactional
    date_updated: 21-04-2023
    ---
   ```
3. Create a PR


### Adding billing vendors

1. Add a new item inside `billing_vendors/vendors.json` file.
2. Use the following format:
    ```
    {
        "name": "",
        "url": ""
      },
    ```