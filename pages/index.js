// mdx support imports
import fs from "fs";
import matter from "gray-matter";

import path from "path";
import Link from "next/link";
import { postFilePaths, VENDOR_PATH } from "../utils/mdxUtils";

// react-bootstrap
import {
  Container,
  Row,
  Col,
  Table,
  Image,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

// swr
import useSWR from "swr";

// components
import Dropdown from "../components/DropDown";
import Layout from "../components/Layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index({ vendors }) {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  const vendorList = JSON.parse(data)?.data;

  return (
    <Layout>
      <div className="page-header py-5">
        <div className="py-4">
          <h1>Usage Based Pricing Done Right</h1>
          <p className="mb-4 lead">
            Discover companies that put customers first with usage-based pricing
          </p>
        </div>
      </div>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md="9">
            <Dropdown
              states={true}
              title={"Why does this exist?"}
              className="text-heading"
            >
              <div>
                <p>
                  Usage-Based Billing or Usage-Based Pricing is a business model
                  where companies choose to charge customers based on the value
                  they receive from product usage, rather than the prevailing
                  practice of charging per user.
                </p>{" "}
                <p>
                  Companies that have adopted this model demonstrate their
                  commitment to transparency and fairness, while also seeing
                  impressive returns in the stock market. Whether they use a
                  pure transaction model or a mix of transaction and
                  subscription-based models, the underlying principle is the
                  same: users are valued based on the actual value they derive
                  from a product or service. There are numerous metrics that can
                  be used to determine the value derived by users.
                </p>
                <p>
                  We’re proud to feature an ever growing list of companies
                  across a wide range of industries that have embraced
                  usage-based billing. By highlighting these companies and their
                  successes, we hope to inspire others to join the movement
                  toward a more equitable, user-centric approach to billing.
                </p>
                <p>This page is useful for:</p>
                <ul>
                  <li>
                    People looking to discover products that have embraced a
                    usage-based pricing model as they seek alternatives to
                    user-based pricing.{" "}
                  </li>
                  <li>
                    People looking to launch usage-based billing for their
                    product and learn from the various revenue models in this
                    paradigm.
                  </li>
                  <li>
                    People looking for technology solutions to help implement
                    usage-based pricing for their own products.
                  </li>
                </ul>
                You can contribute to any section of the website by submitting a
                pull request on the{" "}
                <Link
                  github
                  href="https://github.com/appsmithorg/usage-based-pricing-vendors"
                  target="_blank"
                >
                  github
                </Link>{" "}
                repository.
              </div>
            </Dropdown>

            <div>
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Category</th>
                    <th>Usage Metric</th>
                    <th>Links</th>
                    <th>OSS</th>
                    <th>Billing Type</th>
                    <th>Date Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor) => (
                    <tr key={vendor.filePath}>
                      <td>
                        <Link
                          href={vendor.data.url ? vendor.data.url : "#"}
                          target="_blank"
                        >
                          {vendor.data.company}
                        </Link>
                      </td>
                      <td>{vendor.data.category}</td>
                      <td>{vendor.data.usage_metrics}</td>
                      <td>
                        {vendor.data.links ? (
                          <Link
                            href={vendor.data.links ? vendor.data.links : "#"}
                            target="_blank"
                          >
                            Announcement
                          </Link>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>
                        {["OSS", "YES", "COSS"].includes(
                          vendor.data.oss.toUpperCase()
                        ) ? (
                          <b>{vendor.data.oss}</b>
                        ) : (
                          <>{vendor.data.oss}</>
                        )}
                      </td>
                      <td>{vendor.data.type}</td>
                      <td>{vendor.data.date_updated}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <h5 className="mt-5 mb-3 text-heading">The Other List</h5>
            <p>
              If you're looking to implement usage based billing for your
              platform, there's a (increasingly) wide variety of billing
              infrastructure providers to enable you to adopt usage based
              billing.
            </p>
            <ul>
              {vendorList &&
                vendorList.map((item, index) => (
                  <li key={index}>
                    <Link href={item.url} target="_blank">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
            <h3 className="mt-5 mb-3">FAQs</h3>
            <Dropdown
              title={
                "What is the difference between a transactional vs Usage Based Subscription? "
              }
              className="text-heading"
            >
              <p>
                We've followed the segmentation logic provided by OpenView
                Partners and broadly bucketed the pricing models into some
                variant of Transactional or Usage-based subscription.
                Transactional models are flexible pricing where customers only
                pay for what they have used during the period. In the UB
                subscription model, customers commit to their desired level of
                usage. They can upgrade or pay overages for more usage. If they
                need less usage, they can change plans (subject to contract
                terms).
              </p>
            </Dropdown>
            <Dropdown
              title={"What kinds of pricing models are excluded?"}
              className="text-heading"
            >
              <p>
                For the time being, we've excluded business models that only
                have a user based component. Examples of such models include{" "}
                <Link
                  href="https://tailscale.com/blog/pricing-v3/"
                  target="_blank"
                >
                  Tailscale
                </Link>
                ,{" "}
                <Link
                  href="https://app.slack.com/plans/T025W3RR3PD/pro?geocode=en-gb"
                  target="_blank"
                >
                  Slack
                </Link>
                . While better than a traditional user based model, these models
                are still highly skewed towards billing based on users.
              </p>
              <p>
                We've also excluded third party transactional payment based
                pricing models, where the end customers perform transactions on
                your platform and you take a percentage cut. This is typically
                the pricing model followed by most marketplaces or payment
                providers (e.g Stripe, Doordash).{" "}
              </p>
            </Dropdown>
            <Dropdown
              title={"Where can I read more on usage based pricing?"}
              className="text-heading"
            >
              <p>
                <Link
                  href="https://openviewpartners.com/usage-based-pricing/"
                  target="_blank"
                >
                  OpenView
                </Link>{" "}
                partners does a lot of work on this space. Get started by seeing
                this{" "}
                <Link
                  href="https://f.hubspotusercontent10.net/hubfs/366266/The%20Usage-Based%20Pricing%20Playbook.pdf"
                  target="_blank"
                >
                  playbook
                </Link>{" "}
                from them. Bessemer has a{" "}
                <Link
                  href="https://www.bvp.com/atlas/linear-volumetric-or-bundling-which-type-of-usage-based-pricing-is-right-for-you"
                  target="_blank"
                >
                  good post
                </Link>{" "}
                covering linear, volumetric and bundled usage based models.
              </p>
            </Dropdown>

            <hr className="my-4" />
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col md="12">
            <div>
              Made and maintained with love by{" "}
              <Link href="https://appsmith.com" target="_blank">
                <Image className="img-fluid" src="/appsmith.svg" width="100" />
              </Link>
              .
            </div>
            <div>
              Appsmith is an{" "}
              <Link
                href="https://github.com/appsmithorg/appsmith"
                target="_blank"
              >
                open-source
              </Link>{" "}
              development platform to build and launch internal apps quickly.
              With a friendly usage based pricing.
            </div>
            <div className="mb-4 text-secondary mt-3">
              Contribute to this page by raising a PR on{" "}
              <Link
                href="https://github.com/appsmithorg/usage-based-pricing-vendors"
                target="_blank"
              >
                Github
              </Link>
              . Inspired by{" "}
              <Link href="https://sso.tax/" target="_blank">
                sso.tax
              </Link>
              .
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export function getStaticProps() {
  const vendors = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(VENDOR_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { vendors } };
}
