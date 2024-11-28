import "antd/dist/reset.css";
import {Card, Switch} from "antd";
import {Image} from "antd";
import {List} from "antd";
import {Rate} from "antd";
import {Alert} from "antd";
import React, {useState} from "react";
import {Button, Modal} from "antd";
import {Spin} from "antd";
import {Flex} from "antd";
import {Progress} from "antd";
import {Drawer} from "antd";
import {Result} from "antd";
function Comp() {
	const data = [
		{
			title: "Title 1",
		},
		{
			title: "Title 2",
		},
		{
			title: "Title 3",
		},
	];

	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const [auto, setAuto] = React.useState(false);
	const [percent, setPercent] = React.useState(-50);
	const timerRef = React.useRef();
	React.useEffect(() => {
		timerRef.current = setTimeout(() => {
			setPercent((v) => {
				const nextPercent = v + 5;
				return nextPercent > 150 ? -50 : nextPercent;
			});
		}, 100);
		return () => clearTimeout(timerRef.current);
	}, [percent]);
	const mergedPercent = auto ? "auto" : percent;

	const [open, setOpen] = React.useState(false);
	const [loading, setLoading] = React.useState(true);
	const showLoading = () => {
		setOpen(true);
		setLoading(true);

		// Simple loading mock. You should add cleanup logic in real world.
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<section className="p-8">
			<div className="flex items-center gap-6">
				<Switch checkedChildren="on" unCheckedChildren="of" />
				<Image width={300} src="/src/assets/image.jpg" />
				<Alert message="Warning Text" type="warning" />
			</div>
			<div className="mt-6">
				<List
					grid={{gutter: 16, column: 3}}
					dataSource={data}
					renderItem={(item) => (
						<List.Item>
							<Card title={item.title}>
								<Image width={250} src="/src/assets/image.jpg" alt="" />
								<Rate allowHalf defaultValue={3.5} />
							</Card>
						</List.Item>
					)}
				/>
			</div>
			<div>
				<Button type="primary" onClick={showModal}>
					Open Modal
				</Button>
				<Modal
					title="Basic Modal"
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</div>
			<div>
				<Flex align="center" gap="middle">
					<Switch
						checkedChildren="Auto"
						unCheckedChildren="Auto"
						checked={auto}
						onChange={() => {
							setAuto(!auto);
							setPercent(-50);
						}}
					/>
					<Spin percent={mergedPercent} size="small" />
					<Spin percent={mergedPercent} />
					<Spin percent={mergedPercent} size="large" />
				</Flex>
			</div>
			<div className="mt-6">
				<Flex gap="small" vertical>
					<Progress percent={30} />
					<Progress percent={50} status="active" />
					<Progress percent={70} status="exception" />
					<Progress percent={100} />
					<Progress percent={50} showInfo={false} />
				</Flex>
			</div>
			<div>
				<Button type="primary" onClick={showLoading}>
					Open Drawer
				</Button>
				<Drawer
					closable
					destroyOnClose
					title={<p>Loading Drawer</p>}
					placement="right"
					open={open}
					loading={loading}
					onClose={() => setOpen(false)}>
					<Button
						type="primary"
						style={{
							marginBottom: 16,
						}}
						onClick={showLoading}>
						Reload
					</Button>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Drawer>
			</div>
			<div>
				<Result
					status="success"
					title="Successfully Purchased Cloud Server ECS!"
					subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
					extra={[
						<Button type="primary" key="console">
							Go Console
						</Button>,
						<Button key="buy">Buy Again</Button>,
					]}
				/>
			</div>
		</section>
	);
}

export default Comp;
