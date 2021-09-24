import React from "react";
import { Col, Skeleton } from "antd";

import { getSpan, getOffset } from "../../utils/helpers/screenMeasures";

const SkeletonList = ({ loading }) => {
  return (
    <>
      <Skeleton loading={loading} active>
        <Col span={getSpan()} offset={getOffset()}>
          <div>
            <h4>Ant Design, a design language</h4>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure).
            </p>
          </div>
        </Col>
      </Skeleton>
      <Skeleton loading={loading} active>
        <Col span={getSpan()} offset={getOffset()}>
          <div>
            <h4>Ant Design, a design language</h4>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure).
            </p>
          </div>
        </Col>
      </Skeleton>
      <Skeleton loading={loading} active>
        <Col span={getSpan()} offset={getOffset()}>
          <div>
            <h4>Ant Design, a design language</h4>
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure).
            </p>
          </div>
        </Col>
      </Skeleton>
    </>
  );
};

export default SkeletonList;
