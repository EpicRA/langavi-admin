import styles from "@/styles/pages/admin.module.scss";

import {
  Card,
  CardHeader,
  Status,
  BackArrow,
  CardSection,
  Title,
  Description,
  List,
  Button,
  Modal,
  Menu,
  Table,
  Input,
  Form,
} from "@/components";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { SubmitButton } from "../../../components/button/SubmitButton";
import * as Yup from "yup";
import { Formik } from "formik";

interface IOrderProps {}

const OrderDetail = (props: IOrderProps) => {
  // Get id from url
  const router = useRouter();
  const { orderId } = router.query;

  const order = {
    _id: "63bf35734eda33b77a72ef70",
    orderNumber: "T53710248",
    clientId: "63bf35734eda33b77a72ef6d",
    shippingAddress: {
      firstName: "juan alejandro",
      lastName: "flores perez",
      address: "avenida cuauhtemoc 830, narvarte poniente",
      address2: "departamento 603",
      city: "benito juarez",
      estate: "ciudad de méxico",
      country: "méxico",
      zip: "3020",
      phone: "4621651299",
      _id: "63bf35734eda33b77a72ef71",
    },
    billingAddress: {
      firstName: "juan alejandro",
      lastName: "flores perez",
      address: "avenida cuauhtemoc 830, narvarte poniente",
      address2: "departamento 603",
      city: "benito juarez",
      estate: "ciudad de méxico",
      country: "méxico",
      zip: "3020",
      phone: "4621651299",
      _id: "63bf35734eda33b77a72ef72",
    },
    products: [
      {
        title: "chocolate blanco artesanal",
        variantName: "18g",
        slug: "chocolate_blanco_artesanal",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_blanco_artesanal_18g_1663629800710.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63bf35734eda33b77a72ef73",
      },
      {
        title: "chocolate amargo 73% cacao",
        variantName: "18g",
        slug: "chocolate_amargo_73-cacao",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_amargo_73-cacao_18g_1663629227098.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63bf35734eda33b77a72ef74",
      },
      {
        title: "chocolate de leche premium",
        variantName: "18g",
        slug: "chocolate_de-leche_premium",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_de-leche_premium_18g_1663628487047.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63bf35734eda33b77a72ef75",
      },
      {
        title: "chocolate amargo premium",
        variantName: "18g",
        slug: "chocolate_amargo_premium",
        image:
          "https://langavi-product-pictures.s3.amazonaws.com/chocolate_amargo_premium_18g_1663627587138.png",
        price: 270,
        quantity: 1,
        description: "Caja con 18 barras",
        _id: "63bf35734eda33b77a72ef76",
      },
    ],
    numberOfItems: 4,
    subtotal: 1080,
    tax: {
      percent: "0.16",
      amount: "949.2",
      _id: "63bf35734eda33b77a72ef77",
    },
    total: 1080,
    paidAt: "11 de enero de 2023",
    transactionId: "1D903767N30929927",
    orderStatus: "preparando pedido para ser enviado",
    provider: "paypal",
    discounts: [],
    shippingPrice: 50,
  };

  const options = ["Enviado", "Entregado", "Preparando"];

  const shippingAddress = {
    firstName: "juan alejandro",
    lastName: "flores perez",
    address: "avenida cuauhtemoc 830, narvarte poniente",
    address2: "departamento 603",
    city: "benito juarez",
    estate: "ciudad de méxico",
    country: "méxico",
    zip: "3020",
    phone: "4621651299",
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditSubmit = (data: any) => {
    console.log(data);
    setIsEditing(false);
  };

  return (
    <>
      <BackArrow backTo="ordenes" />
      <div className={styles.orderPage}>
        <div
          style={{
            width: "70%",
          }}
        >
          <Card>
            <CardSection line={false}>
              <CardHeader
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Title>Orden #{orderId}</Title>
                <div
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                  }}
                >
                  <Status status={0} clickeable options={options} />
                  <Menu>
                    <Button
                      onClick={handleEdit}
                      withIcon={true}
                      iconName="edit"
                    >
                      Datos de envio
                    </Button>
                  </Menu>
                </div>
              </CardHeader>
            </CardSection>
            <CardSection line={false}>
              <Description>
                Guía de rastreo <span>1Z1234567890123456</span> paqueteria DHL
                pagado el {order.paidAt}
              </Description>
              <List
                listTitle="Detalles"
                styles={{ marginTop: "1.5rem" }}
                data={[
                  {
                    label: "Nombre",
                    value:
                      shippingAddress.firstName +
                      " " +
                      shippingAddress.lastName,
                  },
                  {
                    label: "Dirección",
                    value: shippingAddress.address,
                  },
                  {
                    label: "Ciudad",
                    value: shippingAddress.city,
                  },
                  {
                    label: "Estado",
                    value: shippingAddress.estate,
                  },
                  {
                    label: "País",
                    value: shippingAddress.country,
                  },
                  {
                    label: "Código postal",
                    value: shippingAddress.zip,
                  },
                  {
                    label: "Teléfono",
                    value: shippingAddress.phone,
                  },
                ]}
              />
            </CardSection>
          </Card>
          <Card
            style={{
              marginTop: "1rem",
            }}
          >
            <CardSection line={false}>
              <CardHeader>
                <Title>Productos</Title>
              </CardHeader>
            </CardSection>
            <CardSection line={false}>
              <Table
                headers={["Producto", "Cantidad", "Precio", "Total"]}
                centerRows={[false, true, true, true]}
                clickeable={false}
                proportion={["40%", "20%", "20%", "20%"]}
              >
                <>
                  {order.products.map((product) => (
                    <Table.Row key={product._id}>
                      <Table.Cell>
                        <Image
                          src={product.image}
                          alt={product.title}
                          width="50"
                          height="50"
                          style={{ marginRight: "1rem" }}
                        />
                        {product.title}{" "}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        {product.quantity}{" "}
                        {product.quantity > 1 ? "unidades" : "unidad"}{" "}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        ${product.price} {product.price > 1 ? "pesos" : "peso"}{" "}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        ${product.price * product.quantity}{" "}
                        {product.price * product.quantity > 1
                          ? "pesos"
                          : "peso"}{" "}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </>
              </Table>
            </CardSection>
          </Card>
        </div>

        <div className={styles.section}>
          <Card>
            <CardSection line={false}>
              <CardHeader>
                <Title>Resumen</Title>
              </CardHeader>
            </CardSection>
            <CardSection line={false}>
              <List
                listTitle="Pedido"
                styles={{ marginTop: "1.5rem" }}
                data={[
                  {
                    label: "Subtotal",
                    value: `$${order.subtotal} pesos`,
                  },
                  {
                    label: "Envío",
                    value: `$${order.shippingPrice} pesos`,
                  },
                  {
                    label: "Descuentos",
                    value:
                      order.discounts.length > 0 ? order.discounts[0] : "-",
                  },
                  {
                    label: "Impuestos",
                    value: `$${order.tax.amount} pesos`,
                  },
                  {
                    label: "Total",
                    value: `$${order.total} pesos`,
                  },
                ]}
              />
            </CardSection>
          </Card>

          <Card
            style={{
              marginTop: "1rem",
            }}
          >
            <CardSection line={false}>
              <CardHeader>
                <Title>Información de pago</Title>
              </CardHeader>
            </CardSection>

            <CardSection line={false}>
              <List
                listTitle="Pago"
                styles={{ marginTop: "1.5rem" }}
                data={[
                  {
                    label: "ID",
                    value: order.transactionId,
                  },
                  {
                    label: "Método de pago",
                    value: order.provider,
                  },
                  {
                    label: "Fecha de pago",

                    value: order.paidAt,
                  },
                ]}
              />
            </CardSection>
          </Card>
        </div>
      </div>

      {isEditing && (
        <Modal isOpen={isEditing}>
          <Card>
            <CardSection line={false}>
              <CardHeader>
                <Title>Añadir datos de entrega</Title>
              </CardHeader>
            </CardSection>

            <CardSection line={false}>
              <Formik
                onSubmit={handleEditSubmit}
                validationSchema={Yup.object({
                  trackingNumber: Yup.string().required(
                    "El número de guía es requerido"
                  ),
                  trackingService: Yup.string().required(
                    "La paquetería es requerida"
                  ),
                  shippingPrice: Yup.number().required(
                    "El precio de envío es requerido"
                  ),
                })}
                initialValues={{
                  trackingNumber: "",
                  shippingPrice: "",
                }}
                validateOnMount
              >
                {({ handleSubmit, isValid }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Inputs>
                      <Input
                        name="trackingNumber"
                        label="Número de guía"
                        type="text"
                        placeholder="Número de guía"
                      />
                      <Input
                        name="trackingService"
                        label="Paquetería"
                        type="select"
                        options={[
                          { value: "dhl", label: "DHL" },
                          { value: "fedex", label: "Fedex" },
                          { value: "estafeta", label: "Estafeta" },
                          { value: "ups", label: "UPS" },
                          { value: "redpack", label: "Redpack" },
                          { value: "correos", label: "Correos" },
                        ]}
                      />
                      <Input
                        name="shippingPrice"
                        label="Precio de envío"
                        type="number"
                        placeholder="Precio de envío"
                      />
                    </Form.Inputs>

                    <Form.Buttons>
                      <SubmitButton
                        onClick={handleEditCancel}
                        position="right"
                        type="button"
                        variant="cancel"
                      >
                        <span>Cancelar</span>
                      </SubmitButton>
                      <SubmitButton
                        position="right"
                        type="submit"
                        loading={false}
                      >
                        <span>Guardar</span>
                      </SubmitButton>
                    </Form.Buttons>
                  </Form>
                )}
              </Formik>
            </CardSection>
          </Card>
        </Modal>
      )}
    </>
  );
};

// justify-content: space-between;
export default OrderDetail;
