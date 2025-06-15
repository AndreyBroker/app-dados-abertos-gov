import { useEffect, useState } from "react";
import { fetchXMLData } from "../utils/fetchXML"
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { ptBR } from '@mui/x-data-grid/locales';
import { Box } from "@mui/material";

interface Row {
  CO_CNES: string;
  CO_UNIDADE: string;
  CO_UF: string;
  NO_RAZAO_SOCIAL: string;
  NO_FANTASIA: string;
  CO_ATIVIDADE: string;
  NU_TELEFONE: string;
  NO_LOGRADOURO: string;
  NO_BAIRRO: string;
}

export default function TableCNES() {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    async function load() {
      const xml = await fetchXMLData("/cnes.xml");
      console.log(xml)
      const dataRows = xml.Rows.Row as Row[];
      setRows(dataRows);
    }
    load();
  }, []);

  const columns: GridColDef[] = [
    { 
      field: "CO_CNES",
      headerName: "CO_CNES", 
      width: 100
    },
    { 
      field: "CO_UNIDADE",
      headerName: "CO_UNIDADE", 
      width: 180
    },
    { 
      field: "CO_UF", 
      headerName: "UF", 
      width: 50
    },
    { 
      field: "NO_RAZAO_SOCIAL", 
      headerName: "Razão Social", 
      width: 200
    },
    { 
      field: "NO_FANTASIA", 
      headerName: "Fantasia", 
      width: 180
    },
    { 
      field: "CO_ATIVIDADE", 
      headerName: "Atividade", 
      width: 100
    },
    { 
      field: "NU_TELEFONE", 
      headerName: "Telefone", 
      width: 180
    },
    { 
      field: "NO_LOGRADOURO", 
      headerName: "Logradouro", 
      width: 200
    },
    { 
      field: "NO_BAIRRO", 
      headerName: "Bairro", 
      width: 200
    }
  ];

  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      justifyContent: "center",
      backgroundColor: "#FFF", 
      borderRadius: "20px",
      padding: "20px",
      width: "100%",
      height: "100%"
    }}>
      <Box sx={{fontSize: "13px"}}>Cadastro Nacional de Estabelecimentos de Saúde</Box>
      <DataGrid 
        rows={rows}
        columns={columns}
        checkboxSelection
        localeText={ptBR.components?.MuiDataGrid?.defaultProps.localeText}
        pagination={true}
        pageSizeOptions={[5, 10, 15]}
        getRowId={(row: Row) => (row.CO_CNES)}
      />
      <Box sx={{fontSize: "13px"}}>fonte: <a href="https://opendatasus.saude.gov.br/dataset/cnes-cadastro-nacional-de-estabelecimentos-de-saude" target="_blank" rel="noopener noreferrer">opendatasus</a></Box>
    </div>
  );
}
