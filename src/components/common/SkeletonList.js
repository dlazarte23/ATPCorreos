import React from "react";
import { Col, Skeleton } from "antd";

const getSpan = () => {
  const width = window.screen.width;
  if (width >= 1920) {
    return 12;
  } else if (width >= 1280) {
    return 16;
  } else {
    return 24;
  }
};

const getOffset = () => {
  const width = window.screen.width;
  if (width >= 1920) {
    return 6;
  } else if (width >= 1280) {
    return 4;
  } else {
    return 0;
  }
};

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
